# Laser

def on_player1_button_a_pressed():
    laser
    laser = sprites.create_projectile_from_sprite(img("""
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
        """),
        orbiter,
        80,
        0)
controller.player1.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player1_button_a_pressed)

def on_on_overlap(sprite, otherSprite):
    info.change_score_by(5)
    gem.set_position(randint(10, 150), randint(10, 110))
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

# Working Laser

def on_on_overlap2(sprite, otherSprite):
    alien.destroy(effects.fire)
    asteroid.destroy(effects.fire)
    info.player1.change_score_by(1)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap2)

def on_on_overlap3(sprite, otherSprite):
    sprite.destroy(effects.cool_radial, 200)
    game.over(False)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap3)

asteroid2: Sprite = None
alien2: Sprite = None
asteroid: Sprite = None
alien: Sprite = None
gem: Sprite = None
orbiter: Sprite = None
# Prerequisite
orbiter = sprites.create(img("""
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
    """),
    0)
orbiter.set_kind(SpriteKind.player)
orbiter.set_position(15, 61)
orbiter.set_flag(SpriteFlag.STAY_IN_SCREEN, True)
controller.move_sprite(orbiter, 100, 100)
info.set_score(0)
info.set_life(1)
# Gems
gem = sprites.create(img("""
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
    """),
    0)
gem.set_kind(SpriteKind.food)
# Aliens and Asteroids
alien = sprites.create(img("""
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
    """),
    0)
alien.set_velocity(-50, 0)
alien.set_position(scene.screen_width(), randint(0, scene.screen_height()))
alien.set_kind(SpriteKind.enemy)
asteroid = sprites.create(img("""
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
    """),
    0)
asteroid.set_velocity(-60, 0)
asteroid.set_position(scene.screen_width(), randint(0, scene.screen_height()))
asteroid.set_kind(SpriteKind.enemy)

def on_update_interval():
    global alien2
    alien2 = sprites.create(img("""
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
        """),
        0)
    alien2.set_velocity(-50, 0)
    alien2.set_position(scene.screen_width(), randint(0, scene.screen_height()))
    alien2.set_kind(SpriteKind.enemy)
game.on_update_interval(750, on_update_interval)

def on_update_interval2():
    global asteroid2
    asteroid2 = sprites.create(img("""
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
        """),
        0)
    asteroid2.set_velocity(-60, 0)
    asteroid2.set_position(scene.screen_width(), randint(0, scene.screen_height()))
    asteroid2.set_kind(SpriteKind.enemy)
game.on_update_interval(500, on_update_interval2)
