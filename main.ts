namespace SpriteKind {
    export const Clicker = SpriteKind.create()
    export const Up1 = SpriteKind.create()
    export const Up2 = SpriteKind.create()
    export const AnnRoche = SpriteKind.create()
    export const Up3 = SpriteKind.create()
    export const Up4 = SpriteKind.create()
    export const Clicker2 = SpriteKind.create()
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
function Pioche2 () {
    DmgSec = 1
    Chance = 2
    Pioche.setImage(img`
. . . . f f f f f . . . . 
. . . f 5 5 5 5 5 f e e . 
. . . . f f f f 5 5 f e . 
. . . . . . . . f 5 5 f . 
. . . . . . . f e f 5 5 f 
. . . . . . f e f . f 5 f 
. . . . . f e f . . f 5 f 
. . . . f e f . . . f 5 f 
. . . f e f . . . . f 5 f 
. . f e f . . . . . . f . 
. f e f . . . . . . . . . 
f e f . . . . . . . . . . 
f f . . . . . . . . . . . 
`)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Up4, function (sprite, otherSprite) {
    if (info.score() >= 1000 && controller.A.isPressed()) {
        if (DmgSec == 2) {
            otherSprite.destroy(effects.disintegrate, 500)
            info.changeScoreBy(-1000)
            Pioche5()
        }
    } else {
        UpgradeTime4.say("Price: 1000 pts", 200)
    }
})
function Pioche3 () {
    DmgSec = 2
    Chance = 3
    Pioche.setImage(img`
. . . . f f f f f . . . . 
. . . f 2 2 2 2 2 f e e . 
. . . . f f f f 2 2 f e . 
. . . . . . . . f 2 2 f . 
. . . . . . . f e f 2 2 f 
. . . . . . f e f . f 2 f 
. . . . . f e f . . f 2 f 
. . . . f e f . . . f 2 f 
. . . f e f . . . . f 2 f 
. . f e f . . . . . . f . 
. f e f . . . . . . . . . 
f e f . . . . . . . . . . 
f f . . . . . . . . . . . 
`)
}
function Pioche5 () {
    DmgSec = 2
    Chance = 5
    Pioche.setImage(img`
. . . . f f f f f . . . . 
. . . f 8 8 8 8 8 f e e . 
. . . . f f f f 8 8 f e . 
. . . . . . . . f 8 8 f . 
. . . . . . . f e f 8 8 f 
. . . . . . f e f . f 8 f 
. . . . . f e f . . f 8 f 
. . . . f e f . . . f 8 f 
. . . f e f . . . . f 8 f 
. . f e f . . . . . . f . 
. f e f . . . . . . . . . 
f e f . . . . . . . . . . 
f f . . . . . . . . . . . 
`)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Up3, function (sprite, otherSprite) {
    if (info.score() >= 200 && controller.A.isPressed()) {
        if (DmgSec == 2) {
            otherSprite.destroy(effects.disintegrate, 500)
            info.changeScoreBy(-200)
            Pioche4()
        }
    } else {
        UpgradeTime3.say("Price: 200 pts", 200)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Up2, function (sprite, otherSprite) {
    if (info.score() >= 75 && controller.A.isPressed()) {
        if (DmgSec == 1) {
            otherSprite.destroy(effects.disintegrate, 500)
            info.changeScoreBy(-75)
            Pioche3()
            UpgradeTime4 = sprites.create(img`
. . . . f f f f f . . . . 
. . . f 7 7 7 7 7 f e e . 
. . . . f f f f 7 7 f e . 
. . . . . . . . f 7 7 f . 
. . . f . . . f e f 7 7 f 
. . f 8 f . f e f . f 7 f 
. f 8 8 8 f e f . . f 7 f 
f 8 8 8 8 8 f . . . f 7 f 
. f 8 8 8 f . . . . f 7 f 
. f 8 8 8 f . . . . . f . 
. f 8 8 8 f . . . . . . . 
f f 8 8 8 f . . . . . . . 
f f f f f . . . . . . . . 
`, SpriteKind.Up4)
            UpgradeTime4.setPosition(260, 62)
        }
    } else {
        UpgradeTime2.say("Price: 75 pts", 200)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.AnnRoche, function (sprite, otherSprite) {
    AnnonceurRoche.say("Price: 10000 pts", 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Up1, function (sprite, otherSprite) {
    if (info.score() >= 25 && controller.A.isPressed()) {
        otherSprite.destroy(effects.disintegrate, 500)
        info.changeScoreBy(-25)
        Pioche2()
        UpgradeTime3 = sprites.create(img`
. . . . f f f f f . . . . 
. . . f 2 2 2 2 2 f e e . 
. . . . f f f f 2 2 f e . 
. . . . . . . . f 2 2 f . 
. . . 8 . . . f e f 2 2 f 
. . 8 7 8 . f e f . f 2 f 
. 8 7 7 7 8 e f . . f 2 f 
8 7 7 7 7 7 8 . . . f 2 f 
. 8 7 7 7 8 . . . . f 2 f 
. 8 7 7 7 8 . . . . . f . 
. 8 7 7 7 8 . . . . . . . 
f 8 7 7 7 8 . . . . . . . 
f f 8 8 8 . . . . . . . . 
`, SpriteKind.Up3)
        UpgradeTime3.setPosition(190, 62)
    } else {
        UpgradeTime.say("Price: 25 pts", 200)
    }
})
function Pioche4 () {
    DmgSec = 2
    Chance = 4
    Pioche.setImage(img`
. . . . f f f f f . . . . 
. . . f 7 7 7 7 7 f e e . 
. . . . f f f f 7 7 f e . 
. . . . . . . . f 7 7 f . 
. . . . . . . f e f 7 7 f 
. . . . . . f e f . f 7 f 
. . . . . f e f . . f 7 f 
. . . . f e f . . . f 7 f 
. . . f e f . . . . f 7 f 
. . f e f . . . . . . f . 
. f e f . . . . . . . . . 
f e f . . . . . . . . . . 
f f . . . . . . . . . . . 
`)
}
let AttackTime = 0
let UpgradeTime3: Sprite = null
let UpgradeTime4: Sprite = null
let Chance = 0
let DmgSec = 0
let AnnonceurRoche: Sprite = null
let Pioche: Sprite = null
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
. . . f c a b b c b d d b b b b b b b d b d d f b c c c f . . . 
. . . f c a a b c b b b a b b a b b b b b b d c c c c f . . . . 
. . . . f f f f f a b b b b a b b b d d b c c c c c f . . . . . 
. . . . . . . . f a a a b b b b b d d d c c c c f f . . . . . . 
. . . . . . . . . f f f f f f f f f f f f f f f . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Clicker)
let Minerais2 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . f d 4 d d 4 f . . . . . . . . . . . 
. . . . . . . . . . . . . f d d 4 4 d 4 4 f f . . . . . . . . . 
. . . . . . . . . . . . . f d d d d 4 d 4 4 e f . . . . . . . . 
. . . . . . . . . . f f f d 5 5 d d 4 4 4 4 e e f . . . . . . . 
. . . . . . . . f f d d 4 d 5 5 d 4 4 d 4 4 e e f . . . . . . . 
. . . . . . . f f 4 4 4 4 d d d 5 d d d 4 4 e e e f . . . . . . 
. . . . . . . f d d d d d 4 4 d d 5 d 5 5 4 4 e e f . . . . . . 
. . . . . . f 4 4 d 5 5 d 4 d d d d 5 4 4 4 4 e e f . . . . . . 
. . . . . . f 4 4 e 4 5 d 4 d d 4 4 5 5 5 4 4 4 e f . . . . . . 
. . . . . . f 4 4 2 4 5 d 4 d 5 4 4 4 4 5 5 4 4 e e f . . . . . 
. . . . . . f 4 5 2 4 5 5 4 4 5 4 4 4 4 4 5 4 4 e e f . . . . . 
. . . . . f 5 5 5 2 4 4 4 4 4 5 4 4 5 4 4 4 4 5 e e f . . . . . 
. . . . . f e 5 5 2 4 4 4 4 4 5 5 4 5 5 4 4 f 4 4 e f . . . . . 
. . . . f f 5 4 4 e 4 5 5 4 4 4 4 4 4 4 4 4 4 f 4 e e f . . . . 
. . . f 5 5 4 4 4 e 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 e f . . . . 
. . . f 5 4 4 4 e e 5 4 4 4 4 4 4 4 4 4 4 4 4 4 2 4 e f . . . . 
. . . f 4 4 4 4 e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e f . . . 
. . . f 2 4 4 2 e 4 4 5 5 4 4 4 4 4 4 5 4 5 4 4 4 f e e f . . . 
. . . f e 2 4 4 e 4 5 5 4 4 4 4 4 4 4 5 4 5 5 f 4 e e e f . . . 
. . . f e 2 2 4 e 4 4 4 2 4 4 2 4 4 4 4 4 4 5 e e e e f . . . . 
. . . . f f f f f 2 4 4 4 4 2 4 4 4 5 5 4 e e e e e f . . . . . 
. . . . . . . . f 2 2 2 4 4 4 4 4 5 5 5 e e e e f f . . . . . . 
. . . . . . . . . f f f f f f f f f f f f f f f . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Clicker2)
UpgradeTime = sprites.create(img`
. . . . f f f f f . . . . 
. . . f 1 1 1 1 1 f e e . 
. . . . f f f f 1 1 f e . 
. . . . . . . . f 1 1 f . 
. . . 4 . . . f e f 1 1 f 
. . 4 5 4 . f e f . f 1 f 
. 4 5 5 5 4 e f . . f 1 f 
4 5 5 5 5 5 4 . . . f 1 f 
. 4 5 5 5 4 . . . . f 1 f 
. 4 5 5 5 4 . . . . . f . 
. 4 5 5 5 4 . . . . . . . 
f 4 5 5 5 4 . . . . . . . 
f f 4 4 4 . . . . . . . . 
`, SpriteKind.Up1)
UpgradeTime2 = sprites.create(img`
. . . . f f f f f . . . . 
. . . f 5 5 5 5 5 f e e . 
. . . . f f f f 5 5 f e . 
. . . . . . . . f 5 5 f . 
. . . 5 . . . f e f 5 5 f 
. . 5 2 5 . f e f . f 5 f 
. 5 2 2 2 5 e f . . f 5 f 
5 2 2 2 2 2 5 . . . f 5 f 
. 5 2 2 2 5 . . . . f 5 f 
. 5 2 2 2 5 . . . . . f . 
. 5 2 2 2 5 . . . . . . . 
f 5 2 2 2 5 . . . . . . . 
f f 5 5 5 . . . . . . . . 
`, SpriteKind.Up2)
Pioche = sprites.create(img`
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
AnnonceurRoche = sprites.create(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, SpriteKind.AnnRoche)
controller.moveSprite(Pioche, 100, 100)
UpgradeTime.setPosition(190, 62)
UpgradeTime2.setPosition(260, 62)
Minerais2.setPosition(80, 206)
AnnonceurRoche.setPosition(80, 170)
AnnonceurRoche.setFlag(SpriteFlag.Invisible, true)
scene.cameraFollowSprite(Pioche)
tiles.setTilemap(tiles.createTilemap(
            hex`20002000060f05050505050f05050505050f05050505050f05050505050f0505050505070d160a0a0a0a0a0a17160a0a0a0a0a0a0a0a17141414141414141414141414100d04060f05050f070d04060f050505050f070d141414141414141414141414040d040d14141414040d040d141414141414040d141414141414141414141414040d040d14141414040d040d141414141414040d141414141414141414141414040d040b17141416080d040b121714141612080d1414141414141414141414140411190f181414190f1819050518141419050518141414141414141414141414040d141414141414141414141414141414141414141414141414141414141414100d141414141414141414141414141414141414141414141414141414141414040d141414141414141414141414141414141414141414141414141414141414040d161217161716121714141414141414141414141414141414141414141414040c040618191819070d141414141414141414141414141414141414141414140411040d14141414040d14141414141414141414141414141414141414141414040d040d14141414040d14141414141414141414141414141414141414141414100d040b120a0a12080d14141414141414141414141414141414141414141414040d190505050505051814141414141414141414141414141414141414141414040d141414141414141414141414141414141414141414141414141414141414040c1414141414141414141414141414141414141414141414141414141414140411141414141414141414141414141414141414141414141414141414141414040d141414141414141414141414141414141414141414141414141414141414100d141414141414141414141414141414141414141414141414141414141414040d141414141414141414141414141414141414141414141414141414141414040d141414141414141414141414141414141414141414141414141414141414040d1414141414141414141414141414141414141414141414141414141414140411141414141414141414141414141414141414141414141414141414141414040d141414141414141414141414141414141414141414141414141414141414100d141414141414141414141414141414141414141414141414141414141414040d141414141414141414141414141414141414141414141414141414141414040d141414141414141414141414141414141414141414141414141414141414040d1414141414141414141414141414141414141414141414141414141414140411141414141414141414141414141414141414141414141414141414141414040b0a0a0a0a0a120a0a0a0a0a120a0a0a0a0a120a0a0a0a0a120a0a0a0a0a1208`,
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
2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . 2 
2 2 2 . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . 2 
2 2 2 . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . 2 
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
            [myTiles.tile0,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.castle.tileDarkGrass1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterSouth2,sprites.castle.tilePath5,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLight0,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.greenOuterNorth1],
            TileScale.Sixteen
        ))
DmgSec = 0
info.setScore(0)
Chance = 1
forever(function () {
    if (controller.A.isPressed() && Pioche.overlapsWith(Minerais)) {
        if (AttackTime == 0) {
            if (Chance == 1) {
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
            } else if (Chance == 2) {
                animation.runImageAnimation(
                Pioche,
                [img`
. . . . f f f f f . . . . 
. e e f 5 5 5 5 5 f . . . 
. e f 5 5 f f f f . . . . 
. f 5 5 f . . . . . . . . 
f 5 5 f e f . . . . . . . 
f 5 f . f e f . . . . . . 
f 5 f . . f e f . . . . . 
f 5 f . . . f e f . . . . 
f 5 f . . . . f e f . . . 
. f . . . . . . f e f . . 
. . . . . . . . . f e f . 
. . . . . . . . . . f e f 
. . . . . . . . . . . f f 
`,img`
. . . . f f f f f . . . . 
. . . f 5 5 5 5 5 f e e . 
. . . . f f f f 5 5 f e . 
. . . . . . . . f 5 5 f . 
. . . . . . . f e f 5 5 f 
. . . . . . f e f . f 5 f 
. . . . . f e f . . f 5 f 
. . . . f e f . . . f 5 f 
. . . f e f . . . . f 5 f 
. . f e f . . . . . . f . 
. f e f . . . . . . . . . 
f e f . . . . . . . . . . 
f f . . . . . . . . . . . 
`],
                100,
                false
                )
            } else if (Chance == 3) {
                animation.runImageAnimation(
                Pioche,
                [img`
. . . . f f f f f . . . . 
. e e f 2 2 2 2 2 f . . . 
. e f 2 2 f f f f . . . . 
. f 2 2 f . . . . . . . . 
f 2 2 f e f . . . . . . . 
f 2 f . f e f . . . . . . 
f 2 f . . f e f . . . . . 
f 2 f . . . f e f . . . . 
f 2 f . . . . f e f . . . 
. f . . . . . . f e f . . 
. . . . . . . . . f e f . 
. . . . . . . . . . f e f 
. . . . . . . . . . . f f 
`,img`
. . . . f f f f f . . . . 
. . . f 2 2 2 2 2 f e e . 
. . . . f f f f 2 2 f e . 
. . . . . . . . f 2 2 f . 
. . . . . . . f e f 2 2 f 
. . . . . . f e f . f 2 f 
. . . . . f e f . . f 2 f 
. . . . f e f . . . f 2 f 
. . . f e f . . . . f 2 f 
. . f e f . . . . . . f . 
. f e f . . . . . . . . . 
f e f . . . . . . . . . . 
f f . . . . . . . . . . . 
`],
                100,
                false
                )
            } else if (Chance == 4) {
                animation.runImageAnimation(
                Pioche,
                [img`
. . . . f f f f f . . . . 
. e e f 7 7 7 7 7 f . . . 
. e f 7 7 f f f f . . . . 
. f 7 7 f . . . . . . . . 
f 7 7 f e f . . . . . . . 
f 7 f . f e f . . . . . . 
f 7 f . . f e f . . . . . 
f 7 f . . . f e f . . . . 
f 7 f . . . . f e f . . . 
. f . . . . . . f e f . . 
. . . . . . . . . f e f . 
. . . . . . . . . . f e f 
. . . . . . . . . . . f f 
`,img`
. . . . f f f f f . . . . 
. . . f 7 7 7 7 7 f e e . 
. . . . f f f f 7 7 f e . 
. . . . . . . . f 7 7 f . 
. . . . . . . f e f 7 7 f 
. . . . . . f e f . f 7 f 
. . . . . f e f . . f 7 f 
. . . . f e f . . . f 7 f 
. . . f e f . . . . f 7 f 
. . f e f . . . . . . f . 
. f e f . . . . . . . . . 
f e f . . . . . . . . . . 
f f . . . . . . . . . . . 
`],
                100,
                false
                )
            } else if (Chance == 5) {
                animation.runImageAnimation(
                Pioche,
                [img`
. . . . f f f f f . . . . 
. e e f 8 8 8 8 8 f . . . 
. e f 8 8 f f f f . . . . 
. f 8 8 f . . . . . . . . 
f 8 8 f e f . . . . . . . 
f 8 f . f e f . . . . . . 
f 8 f . . f e f . . . . . 
f 8 f . . . f e f . . . . 
f 8 f . . . . f e f . . . 
. f . . . . . . f e f . . 
. . . . . . . . . f e f . 
. . . . . . . . . . f e f 
. . . . . . . . . . . f f 
`,img`
. . . . f f f f f . . . . 
. . . f 8 8 8 8 8 f e e . 
. . . . f f f f 8 8 f e . 
. . . . . . . . f 8 8 f . 
. . . . . . . f e f 8 8 f 
. . . . . . f e f . f 8 f 
. . . . . f e f . . f 8 f 
. . . . f e f . . . f 8 f 
. . . f e f . . . . f 8 f 
. . f e f . . . . . . f . 
. f e f . . . . . . . . . 
f e f . . . . . . . . . . 
f f . . . . . . . . . . . 
`],
                100,
                false
                )
            }
            AttackTime = 1
            if (DmgSec == 0) {
                pause(1000)
            } else if (DmgSec == 1) {
                pause(500)
            } else if (DmgSec == 2) {
                pause(250)
            }
            AttackTime = 0
            if (Math.percentChance(0.0001 * Chance)) {
                info.changeScoreBy(10)
            } else if (Math.percentChance(0.00001 * Chance)) {
                info.changeScoreBy(50)
            } else if (Math.percentChance(0.000001 * Chance)) {
                info.changeScoreBy(100)
            } else if (Math.percentChance(1e-7 * Chance)) {
                info.changeScoreBy(1000)
            } else {
                info.changeScoreBy(Chance * 1)
            }
        }
    }
})
