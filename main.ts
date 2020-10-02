//  Laser
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function on_player1_button_a_pressed() {
    let laser: Sprite;
    laser
    laser = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . a 8 8 6 9 . . . . . . 
                    . . . . . a 8 8 6 9 . . . . . . 
                    . . . . . a 8 8 6 9 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        `, orbiter, 80, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    info.changeScoreBy(5)
    gem.setPosition(randint(10, 150), randint(10, 110))
})
//  Working Laser
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function on_on_overlap2(sprite: Sprite, otherSprite: Sprite) {
    alien.destroy(effects.fire)
    asteroid.destroy(effects.fire)
    info.player1.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_on_overlap3(sprite: Sprite, otherSprite: Sprite) {
    sprite.destroy(effects.coolRadial, 200)
    game.over(false)
})
let asteroid2 : Sprite = null
let alien2 : Sprite = null
let asteroid : Sprite = null
let alien : Sprite = null
let gem : Sprite = null
let orbiter : Sprite = null
//  Prerequisite
orbiter = sprites.create(img`
        6 6 . . . . . . . . . . . . . . 
            6 9 6 . . . . . . . . . . . . . 
            6 9 9 6 6 . . . . . . . . . . . 
            6 9 9 6 . . . . . . . . . . . . 
            6 6 6 . . . . . . . . . . . . . 
            6 9 9 6 . . . . . . . . . . . . 
            6 9 9 9 6 6 . . . . . . . . . . 
            6 9 9 9 9 9 6 . . . . . . . . . 
            6 9 9 9 9 9 6 . . . . . . . . . 
            6 9 9 9 6 6 . . . . . . . . . . 
            6 9 9 6 . . . . . . . . . . . . 
            6 6 6 . . . . . . . . . . . . . 
            6 9 9 6 . . . . . . . . . . . . 
            6 9 9 6 6 . . . . . . . . . . . 
            6 9 6 . . . . . . . . . . . . . 
            6 6 . . . . . . . . . . . . . .
    `, 0)
orbiter.setKind(SpriteKind.Player)
orbiter.setPosition(15, 61)
orbiter.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(orbiter, 100, 100)
info.setScore(0)
info.setLife(1)
//  Gems
gem = sprites.create(img`
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    `, 0)
gem.setKind(SpriteKind.Food)
//  Aliens and Asteroids
alien = sprites.create(img`
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 7 . . . . . . . . 7 . . . 
            . . . . 7 . . 7 7 . . 7 . . . . 
            . . . . 7 . 7 7 7 7 . 7 . . . . 
            . . . . . 7 7 7 7 7 7 . . . . . 
            . . . . 7 7 2 7 7 2 7 7 . . . . 
            . . . 7 7 7 7 7 7 7 7 7 7 . . . 
            . . . . . 7 . 7 7 . 7 . . . . . 
            . . . . 7 . 7 . . 7 . 7 . . . . 
            . . . . . . 7 . . 7 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    `, 0)
alien.setVelocity(-50, 0)
alien.setPosition(scene.screenWidth(), randint(0, scene.screenHeight()))
alien.setKind(SpriteKind.Enemy)
asteroid = sprites.create(img`
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c . . . . . . 
            . . . . . c c b b b c c . . . . 
            . . . . c b . b b b d b c . . . 
            . . . c b d d d b d b b . c . . 
            . . c b d b b d d b b b b c c . 
            . . c b b b b b d d b b b c . . 
            . c . b b b b b b d d b c c . . 
            . . c b c c c . b b c c . . . . 
            . . . c c . . c c c . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    `, 0)
asteroid.setVelocity(-60, 0)
asteroid.setPosition(scene.screenWidth(), randint(0, scene.screenHeight()))
asteroid.setKind(SpriteKind.Enemy)
game.onUpdateInterval(750, function on_update_interval() {
    
    alien2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . 7 . . . . . . . . 7 . . . 
                    . . . . 7 . . 7 7 . . 7 . . . . 
                    . . . . 7 . 7 7 7 7 . 7 . . . . 
                    . . . . . 7 7 7 7 7 7 . . . . . 
                    . . . . 7 7 2 7 7 2 7 7 . . . . 
                    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
                    . . . . . 7 . 7 7 . 7 . . . . . 
                    . . . . 7 . 7 . . 7 . 7 . . . . 
                    . . . . . . 7 . . 7 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        `, 0)
    alien2.setVelocity(-50, 0)
    alien2.setPosition(scene.screenWidth(), randint(0, scene.screenHeight()))
    alien2.setKind(SpriteKind.Enemy)
})
game.onUpdateInterval(500, function on_update_interval2() {
    
    asteroid2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . c c c . . . . . . 
                    . . . . . c c b b b c c . . . . 
                    . . . . c b . b b b d b c . . . 
                    . . . c b d d d b d b b . c . . 
                    . . c b d b b d d b b b b c c . 
                    . . c b b b b b d d b b b c . . 
                    . c . b b b b b b d d b c c . . 
                    . . c b c c c . b b c c . . . . 
                    . . . c c . . c c c . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        `, 0)
    asteroid2.setVelocity(-60, 0)
    asteroid2.setPosition(scene.screenWidth(), randint(0, scene.screenHeight()))
    asteroid2.setKind(SpriteKind.Enemy)
})
