class Bird extends Transform {
    GRAVITY: number = 5;

    Init(world: World): void {
        this.size.x = 20;
        this.size.y = 20;
        this.element.css("background-color", "yellow");
        this.element.css("color", "magenta");
        this.collidable = true;
    }

    Pre(world: World): void {
        this.velocity.y += (this.GRAVITY * world.deltaTime) / 10;
    }

    Post(world: World): void {
    }

    Collision(world: World): void {
        CollisionTypes.Box(world, this, this.collisions);
    }
}