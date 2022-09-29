export default scene => {
    scene.anims.create({
        key: 'run',
        frames: scene.anims.generateFrameNames('atlas', {
            prefix: 'atlas_',
            start: 1,
            end: 2,
        }),
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'idle',
        frames: [{ key: 'atlas', frame: 'atlas_0' }],
        frameRate: 10
    });

    scene.anims.create({
        key: 'triplefireanim',
        frames: scene.anims.generateFrameNames('triplefire', {
            prefix: 'triplefireanim_',
            start: 0,
            end: 1,
        }),
        frameRate: 5,
        repeat: -1
    });

    scene.anims.create({
        key: 'singlefireanim',
        frames: scene.anims.generateFrameNames('singlefire', {
            prefix: 'singlefireanim_',
            start: 0,
            end: 1,
        }),
        frameRate: 5,
        repeat: -1
    });

    scene.anims.create({
        key: 'charlierun',
        frames: scene.anims.generateFrameNames('charlie', {
            prefix: 'charlie_',
            start: 0,
            end: 3,
        }),
        frameRate: 15,
        repeat: -1
    })
    scene.anims.create({
        key: 'charlieidle',
        frames: [{ key: 'charlie', frame: 'charlie_0' }],
        frameRate: 1
    });
};