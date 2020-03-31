class Pipe extends Transform {
    private static speed: number = -200;


    Init(world: World): void {
        this.element.css("background-color", "green");
        this.position.x = MAX_WIDTH;
        this.collidable = true;
        this.size.x = 150;
    }

    Pre(world: World): void {
        this.velocity.x = Pipe.speed;
    }

    Post(world: World): void {
        // If pipe has left frame, delete it from the world and remove it from the DOM.
        if (this.position.x + this.size.x < 0) {
            this.toDelete = true;
            this.collidable = false;
        }
    }

    Collision(world: World): void {
        this.collisions.forEach(function (collision : Collision) {
            if (collision.transform instanceof Bird) {
                Game.state = State.gameOver;
            }
        });
    }
}