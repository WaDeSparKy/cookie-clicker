namespace SpriteKind {
    export const Clicker = SpriteKind.create()
    export const Up1 = SpriteKind.create()
    export const Up2 = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Up2, function (sprite, otherSprite) {
    if (info.score() >= 50 && controller.A.isPressed()) {
        otherSprite.destroy(effects.disintegrate, 500)
        info.changeScoreBy(-50)
        DmgSec = 2
    } else {
        UpgradeTime2.say("Price: 50 pts", 200)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Up1, function (sprite, otherSprite) {
    if (info.score() >= 25 && controller.A.isPressed()) {
        otherSprite.destroy(effects.disintegrate, 500)
        info.changeScoreBy(-25)
        DmgSec = 1
    } else {
        UpgradeTime.say("Price: 25 pts", 200)
    }
})
let DmgSec = 0
let UpgradeTime2: Sprite = null
let UpgradeTime: Sprite = null
let Minerais = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . f 1 b 1 1 b f . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 b b 1 b b f f . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 b 1 b b c f . . . . . . . . 
. . . . . . . . . . f f f 1 d d 1 1 b b b b c c f . . . . . . . 
. . . . . . . . f f 1 1 b 1 d d 1 b b 1 b b c c f . . . . . . . 
. . . . . . . f f b b b b 1 1 1 d 1 1 1 b b c c c f . . . . . . 
. . . . . . . f 1 1 1 1 1 b b 1 1 d 1 d d b b c c f . . . . . . 
. . . . . . f b b 1 d d 1 b 1 1 1 1 d b b b b c c f . . . . . . 
. . . . . . f b b c b d 1 b 1 1 b b d d d b b b c f . . . . . . 
. . . . . . f b b a b d 1 b 1 d b b b b d d b b c c f . . . . . 
. . . . . . f b d a b d d b b d b b b b b d b b c c f . . . . . 
. . . . . f d d d a b b b b b d b b d b b b b d c c f . . . . . 
. . . . . f b d d a b b b b b d d b d d b b f b b c f . . . . . 
. . . . f f d b b c b d d b b b b b b b b b b f b c c f . . . . 
. . . f d d b b b c d d d b b b b b b b b b b b b b c f . . . . 
. . . f d b b b c c d b b b b b b b b b b b b b a b c f . . . . 
. . . f b b b b c b b b b b b b b b b b b b b b b b c c f . . . 
. . . f a b b a c b b d d b b b b b b d b d b b b f c c f . . . 
. . . f . a b b c b d d b b b b b b b d b d d f b c c c f . . . 
. . . f c a a b c b b b a b b a b b b b b b d c c c c f . . . . 
. . . . f f f f f a b b b b a b b b d d b c c c c c f . . . . . 
. . . . . . . . f a a a b b b b b d d d c c c c f f . . . . . . 
. . . . . . . . . f f f f f f f f f f f f f f f . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Clicker)
UpgradeTime = sprites.create(img`
. . . . f f f f f . . . . 
. . . f 1 1 1 1 1 f e e . 
. . . . f f f f 1 1 f e . 
. . . . . . . . f 1 1 f . 
. . . 9 . . . f e f 1 1 f 
. . 9 7 9 . f e f . f 1 f 
. 9 7 7 7 9 e f . . f 1 f 
9 7 7 7 7 7 9 . . . f 1 f 
. 9 7 7 7 9 . . . . f 1 f 
. 9 7 7 7 9 . . . . . f . 
. 9 7 7 7 9 . . . . . . . 
f 9 7 7 7 9 . . . . . . . 
f f 9 9 9 . . . . . . . . 
`, SpriteKind.Up1)
UpgradeTime2 = sprites.create(img`
. . . . f f f f f . . . . 
. . . f 1 1 1 1 1 f e e . 
. . . . f f f f 1 1 f e . 
. . . . . . . . f 1 1 f . 
. . . 5 . . . f e f 1 1 f 
. . 5 2 5 . f e f . f 1 f 
. 5 2 2 2 5 e f . . f 1 f 
5 2 2 2 2 2 5 . . . f 1 f 
. 5 2 2 2 5 . . . . f 1 f 
. 5 2 2 2 5 . . . . . f . 
. 5 2 2 2 5 . . . . . . . 
f 5 2 2 2 5 . . . . . . . 
f f 5 5 5 . . . . . . . . 
`, SpriteKind.Up2)
let Pioche = sprites.create(img`
. . . . f f f f f . . . . 
. . . f 1 1 1 1 1 f e e . 
. . . . f f f f 1 1 f e . 
. . . . . . . . f 1 1 f . 
. . . . . . . f e f 1 1 f 
. . . . . . f e f . f 1 f 
. . . . . f e f . . f 1 f 
. . . . f e f . . . f 1 f 
. . . f e f . . . . f 1 f 
. . f e f . . . . . . f . 
. f e f . . . . . . . . . 
f e f . . . . . . . . . . 
f f . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(Pioche, 100, 100)
UpgradeTime.setPosition(190, 62)
UpgradeTime2.setPosition(260, 62)
scene.cameraFollowSprite(Pioche)
tiles.setTilemap(tiles.createTilemap(
            hex`20002000060f05050505050f05050505050f05050505050f05050505050f0505050505070d160a0a0a0a0a0a17160a0a0a0a0a0a0a0a17141414141414141414141414100d04060f05050f070d04060f050505050f070d141414141414141414141414040d040d14141414040d040d141414141414040d141414141414141414141414040d040d14141414040d040d141414141414040d141414141414141414141414040d040b17141416080d040b121714141612080d1414141414141414141414140411190f181414190f1819050518141419050518141414141414141414141414040d141414141414141414141414141414141414141414141414141414141414100d141414141414141414141414141414141414141414141414141414141414040d141414141414141414141414141414141414141414141414141414141414040d141414141414141414141414141414141414141414141414141414141414040c1414141414141414141414141414141414141414141414141414141414140411141414141414141414141414141414141414141414141414141414141414040d141414141414141414141414141414141414141414141414141414141414100d141414141414141414141414141414141414141414141414141414141414040d141414141414141414141414141414141414141414141414141414141414040d141414141414141414141414141414141414141414141414141414141414040c1414141414141414141414141414141414141414141414141414141414140411141414141414141414141414141414141414141414141414141414141414040d141414141414141414141414141414141414141414141414141414141414100d141414141414141414141414141414141414141414141414141414141414040d141414141414141414141414141414141414141414141414141414141414040d141414141414141414141414141414141414141414141414141414141414040d1414141414141414141414141414141414141414141414141414141414140411141414141414141414141414141414141414141414141414141414141414040d141414141414141414141414141414141414141414141414141414141414100d141414141414141414141414141414141414141414141414141414141414040d141414141414141414141414141414141414141414141414141414141414040d141414141414141414141414141414141414141414141414141414141414040d1414141414141414141414141414141414141414141414141414141414140411141414141414141414141414141414141414141414141414141414141414040b0a0a0a0a0a120a0a0a0a0a120a0a0a0a0a120a0a0a0a0a120a0a0a0a0a1208`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . 2 
2 2 2 . . . . 2 2 2 2 . . . . . . 2 2 . . . . . . . . . . . . 2 
2 2 2 . . . . 2 2 2 2 . . . . . . 2 2 . . . . . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 2 2 2 . . 2 2 2 2 . . . . . . . . . . . . 2 
2 2 2 2 . . 2 2 2 2 2 2 2 . . 2 2 2 2 . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.castle.tileDarkGrass1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterSouth2,sprites.castle.tilePath5,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLight0,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerSouthWest],
            TileScale.Sixteen
        ))
let AttackTime = 0
DmgSec = 0
info.setScore(0)
forever(function () {
    if (controller.A.isPressed() && Pioche.overlapsWith(Minerais)) {
        if (AttackTime == 0) {
            animation.runImageAnimation(
            Pioche,
            [img`
. . . . f f f f f . . . . 
. e e f 1 1 1 1 1 f . . . 
. e f 1 1 f f f f . . . . 
. f 1 1 f . . . . . . . . 
f 1 1 f e f . . . . . . . 
f 1 f . f e f . . . . . . 
f 1 f . . f e f . . . . . 
f 1 f . . . f e f . . . . 
f 1 f . . . . f e f . . . 
. f . . . . . . f e f . . 
. . . . . . . . . f e f . 
. . . . . . . . . . f e f 
. . . . . . . . . . . f f 
`,img`
. . . . f f f f f . . . . 
. . . f 1 1 1 1 1 f e e . 
. . . . f f f f 1 1 f e . 
. . . . . . . . f 1 1 f . 
. . . . . . . f e f 1 1 f 
. . . . . . f e f . f 1 f 
. . . . . f e f . . f 1 f 
. . . . f e f . . . f 1 f 
. . . f e f . . . . f 1 f 
. . f e f . . . . . . f . 
. f e f . . . . . . . . . 
f e f . . . . . . . . . . 
f f . . . . . . . . . . . 
`],
            100,
            false
            )
            AttackTime = 1
            info.changeScoreBy(1)
            if (DmgSec == 0) {
                pause(1000)
            } else if (DmgSec == 1) {
                pause(500)
            } else if (DmgSec == 2) {
                pause(250)
            }
            AttackTime = 0
        }
    }
})
