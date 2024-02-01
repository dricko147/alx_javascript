class Rectangle {
    constructor(w, h) {
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;
        }
    }

    print() {
        for (let i = 0; i < this.height; i++) {
            let line = '';
            for (let j = 0; j < this.width; j++) {
                line += 'X';
            };
            console.log(line);
        };
    };
    rotate(){
        //Create an instance method called rotate() that exchanges the width and the height of the rectangle destructuring
        [this.width,this.height ] = [this.height, this.width];
        
    };
    double(){
        this.width *= 2;
        this.height *= 2;
    };
};

module.exports = Rectangle;