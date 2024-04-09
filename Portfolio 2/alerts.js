
function futbol(){
    Swal.fire({
        title: "Equipos de futbol",
        html: `
        <div class="row">
          <div class="col-md-6">
            <p class="text-center"><strong>Boca Juniors</strong></p>
            <a href="https://www.bocajuniors.com.ar/" class="text-center" target="_blank">
                <img src="img/Bocajs.png" class="img-fluid" alt="" style="max-width: 100%;">
            </a>
            <!-- Información sobre Boca Juniors -->
          </div>
          <div class="col-md-6">
            <p class="text-center"><strong>Manchester United</strong></p>
            <a href="https://www.manutd.com/es" class="text-center" target="_blank">
                <img src="img/Manchester.png" class="img-fluid" alt="" style="max-width: 100%;">
            </a>
            <!-- Información sobre Manchester United -->
          </div>`,
        imageAlt: "Custom image",
        confirmButtonText: 'Cerrar'
    });
}


function gamer(){
    Swal.fire({
        title: "Juegos",
        html: `
                <div class="row">
                <div class="col-md-3">
                    <div class="row">
                        <p class="text-center"><strong>Rocket league</strong></p>
                        <img src="img/rocketleague.png" class="img-fluid row" alt="" style="max-width: 100%;">
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="row">
                        <p class="text-center"><strong>Counter strike 2</strong></p>
                        <img src="img/cs2.png" class="img-fluid" alt="" style="max-width: 100%;">
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="row">
                        <p class="text-center"><strong>League of Legends</strong></p>
                        <img src="img/lol.png" class="img-fluid" alt="" style="max-width: 100%;">
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="row">
                        <p class="text-center" style="width: 100%;"><strong>Fortnite</strong></p>
                            <img src="img/fortnite.png" class="img-fluid" alt="" style="max-width: 100%;">
                    </div>
                </div>
                </div>`,
        imageAlt: "Custom image",
        confirmButtonText: 'Cerrar',
        width: "70%", 
    });
}

function musica(){
    Swal.fire({
        title: "Datos de youtube Music",
        html: `<div class="container">
        <div class="row justify-content-center">
            <div class="col-md-3 mb-3">
                <div class="card">
                    <div class="card-body text-center">
                        <h5 class="card-title"><strong>Bizarrap</strong></h5>
                        <a href="https://music.youtube.com/channel/UCONiUl5u7y2bMaVZJcuRDEQ" target="_blank">
                            <img src="https://lh3.googleusercontent.com/vEkJjs-EZmAYP3ukHzky6kLxLaA1dGuGGUDvJcNQXHBaAXp4xajwptJlT20BXl-qsx18EcQLqJWiUCQ=w226-h226-p-l90-rj" class="img-fluid rounded-circle" alt="">
                        </a>
                        <p class="mt-3">3 horas</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mb-3">
                <div class="card">
                    <div class="card-body text-center">
                        <h5 class="card-title"><strong>Natanael Cano</strong></h5>
                        <a href="https://music.youtube.com/channel/UC47k7qXysCBKeaYfc1zmkIA" target="_blank">
                            <img src="https://lh3.googleusercontent.com/DWjU27gVHhvBXxsjHw1vZ9xgJydt7fClzA99cTslAt98PDr5NJP_67it56ClwMjCp8K_ceXbMP9gig=w226-h226-p-l90-rj" class="img-fluid" alt="" style="max-width: 90%; border-radius: 50%;">
                        </a>
                        <p class="mt-3">3 horas</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mb-3">
                <div class="card">
                    <div class="card-body text-center">
                        <h5 class="card-title"><strong>Milo J</strong></h5>
                        <a href="https://music.youtube.com/channel/UCLabAHLHMy2MdTWaZATUmQQ" target="_blank">
                            <img src="https://lh3.googleusercontent.com/QZIwXSGT_gU5EHz5PbfLdPyZfDnvVLhFqnZSN44jadallrwWODt39WlxXWDtX_zJqroMIqDX33_7G1ruOA=w226-h226-l90-rj" class="img-fluid" alt="" style="max-width: 90%; border-radius: 50%;">
                        </a>
                        <p class="mt-3">2 horas</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mb-3">
                <div class="card">
                    <div class="card-body text-center">
                        <h5 class="card-title"><strong>Duki</strong></h5>
                        <a href="https://music.youtube.com/channel/UCtLchRAZex11gn-ah1_1Pgw" target="_blank">
                            <img src="https://lh3.googleusercontent.com/wA3R9zzDXh-Fc9clFDYvPMmnuejcqtIK9b2x5_eAphJb_EwMYuPA7pLbioka_xKdNung73UH_JqzYQ=w226-h226-p-l90-rj" class="img-fluid" alt="" style="max-width: 90%; border-radius: 50%;">
                        </a>
                        <p class="mt-3">2 horas</p>
                    </div>
                </div>
            </div>
            

        </div>
    </div>`,
        imageAlt: "Custom image",
        confirmButtonText: 'Cerrar',
        width: "70%", 
    });
}

function trabajos(){
    Swal.fire({
        title: "Trabajos",
        width: "50%",
        html: `
        <div class="row">
            <div class="col-md-5 my-2 mx-4" style="border: 1px solid #aeaeae;">
                <p class="text-center" style="font-size: 2.5vh"><strong>Puerto Noria Computacion</strong></p>
                <a href="" class="text-center">
                    <img src="img/pnc.png" class="img-fluid" alt="" >
                </a>
                <p class="text-left" style="font-size: 2vh"><br> - Servicio técnico de computadoras, Notebooks e impresoras.<br>- Instalación de cámaras de seguridad.<br>- Tercerizados por BNA, BANCOR, GALICIA Y MACRO.</p>
            </div>
            <div class="col-md-5 my-2 mx-4" style="border: 1px solid #aeaeae;">
                <p class="text-center"><strong>Don Emilio SRL</strong></p>
                <a href="">
                    <img src="img/donemilio.png" class="img-fluid" alt="" style="max-width: 100%;">
                </a>
                <p class="text-left" style="font-size: 2vh"><br>- Mantenimiento de computadoras, notebooks e impresoras.<br>- Cableados de red.<br>- Instalaciones de sistemas (MAGNUS, MAGNUS PRUEBA, SIDGE, Crystal Report, entre otros.).</p>
            </div>
        </div>`,
        imageAlt: "Custom image",
        confirmButtonText: 'Cerrar'
    });
}


