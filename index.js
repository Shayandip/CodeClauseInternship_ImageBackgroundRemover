const { Rembg } = require("rembg-node");
const sharp = require("sharp");

(async () => {
    const input = sharp("profile.jpg");

    const rembg = new Rembg({
        logging : true,
    });

    const output = await rembg.remove(input);
    
    await output.webp().toFile("test-output.webp");
})();