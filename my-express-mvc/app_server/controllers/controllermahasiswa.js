const mongoose = require("mongoose");
const mahasiswa = mongoose.model("mahasiswa");

// const index = async (req,res) => {
//     try{
//         const mahasiswas = await mahasiswa.find({});
//         res.status(200).json(mahasiswas);
//         if(!mahasiswas){
//             res.status(400).json({message: " Collection is Empty"});
//         }
//     }catch (error){
//         res.status(500).json({message : "Error retrieving users", error});
//     }
// }
// module.exports= {index}

//untuk menghandle request get all mahasiswa
const index = (req, res, next) => {
    mahasiswa.find({}, { __v: 0 })
      .then((mahasiswas) => {
        const responseMessage = {
            code: 200,
            success: true,
            message: "Successfull",
            data: mhs
        };
        res.status(200).json(responseMessage);
      })
      .catch((e) => {
        const responseMessage = {
            code: 400,
            success: false,
            message: "Bad request"
        };
        res.status(400).json(responseMessage);
      });
};

//untuk menghandle request insert mahasiswa
const insert = (req, res, next) => {
    const mhs = new mahasiswa({
      nama: req.body.nama,
      npm: req.body.npm,
      email: req.body.email,
      tanggal_lahir: req.body.tanggal_lahir,
      aktif: true
    });
  

    
    mhs
      .save()
      .then((result) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
                data: result
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: true,
                message: "Bad request"
            };
            res.status(400).json(responseMessage);
        });
};

//untuk menghandle request update mahasiswa
const update = (req, res, next) => {
     mahasiswa
       .findByIdAndUpdate(req.params.id,{
            nama: req.body.nama,
            npm: req.body.npm,
            email: req.body.email,
            tanggal_lahir: req.body.tanggal_lahir,
         })
        .then((result) => {
            mahasiswa
            .findById(req.params.id)
            .then((mhs) =>{
                const responseMessage = {
                    code: 200,
                    success: true,
                    message: "Successfull",
                    data: mhs
                };
                res.status(200).json(responseMessage);
            });        
        })
        .catch((e) => {
            const responseMessage = {
                code: 404,
                success: false,
                message: "ID " + req.params.id + " Not Found",
                error: e
            };
            res.status(404).json(responseMessage);
        });
};

//untuk menghandle request show detail
const show = (req, res, next) => {
    mahasiswa
        .findById(req.params.id)
        .then((mhs) =>{
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
                data: mhs
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 404,
                success: false,
                message: "ID " + req.params.id + " Not Found",
            };
            res.status(404).json(responseMessage);
        });
};


//untuk menghandle request delete
const destroy = (req, res, next) => {
    mahasiswa
        .findByIdAndDelete(req.params.id)
        .then((mhs) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
            };
            res.status(200).json(responseMessage);
        }).catch((e) => {
            const responseMessage = {
                code: 404,
                success: false,
                message: "ID " + req.params.id + " Not Found",
                error: e
            };
            res.status(404).json(responseMessage);
        });
};

module.exports = {
    index, insert, update, show, destroy
}