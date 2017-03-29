// module.exports = {
//     convert : require('./lib/convert')
// };
var convert = require('./lib/convert');
var options = {
    separate : true // Don't embed textures in the converted glTF
};
// convert('./specs/data/archicad/archicad/Untitled2/Untitled.obj', './specs/data/archicad/suibian.gltf')
// convert('./specs/data/chenzhou/chenzhou.obj', './specs/data/chenzhou/chenzhou.gltf', options)
// convert('./specs/data/toolBar/Bar Stool 20.obj', './specs/data/toolBar/BarStool20.gltf')
// convert('./specs/data/cerberus/Cerberus.obj', './specs/data/cerberus/cerberus.gltf')
// convert('./specs/data/ship_boat/ship_boat.obj', './specs/data/ship_boat/ship_boat.gltf', options)
convert('./specs/data/waterMachine/水处理机组2.obj', './specs/data/waterMachine/waterMachine.gltf')
// convert('./specs/data/3man/rar/Man_Pose006.obj', './specs/data/3man/rar/Man_Pose006.gltf', options)
// convert('./specs/data/archicad/archicad/卡车.obj', './specs/data/archicad/car.gltf')
// // convert('./specs/data/archicad/archicad/壁柜末端/壁柜末端.obj', './specs/data/archicad/bigui.gltf')
    .then(function() {
        // document.write('Converted model success!');
    });