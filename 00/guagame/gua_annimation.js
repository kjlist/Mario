class GuaAnimation {
    constructor(game) {
        this.game = game
        this.frames = []
        for (let i = 0; i < 3; i++) {
            // let name = 'player'+i
            let name = `player${i}`
            let t = this.game.getImgFromName(name)
            //当一个变量用一会儿就不用的时候,就用一个字母代替
            this.frames.push(t)
        }
        this.texture = this.frames[0]
        this.frameIndex = 0;
        this.frameCount = 3;
        this.x = 50
        this.y = 50
    }

    static new(game) {
        return new this(game)
    }

    update() {
        this.frameCount--
        if (this.frameCount <= 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames.length
            this.texture = this.frames[this.frameIndex]
        }
        //这样使得每三帧切换一次图片
    }

    draw() {
        log(this.frameIndex)
        this.game.drawImage(this)
    }

    move(x) {
        this.x += x
    }
}

// var createStrWithFormat = function (string) {
//     try {
//         var args = arguments;
//         var pattern = new RegExp("%([0-9]+)", "g");
//         return String(string).replace(pattern
//             , function (match, index) {
//                 if (index == 0 || index >= args.length) {
//                     throw "Invalid index in format string";
//                 }
//                 return args[index];
//             });
//     } catch (e) {
//         log("createWithFormat error : " + e);
//         return "";
//     }
// }
// createStrWithFormat("this is a %1 speaking", "male")
//模板字符串使用反引号 (` `) 来代替普通字符串中的用双引号和单引号。模板字符串可以包含特定语法（${expression}）的占位符
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings