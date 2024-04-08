
function futbol(){
    Swal.fire({
        title: "Equipos de futbol",
        html: `
        <div class="row">
          <div class="col-md-6">
            <p class="text-center"><strong>Boca Juniors</strong></p>
            <a href="" class="text-center">
                <img src="img/Bocajs.png" class="img-fluid" alt="" style="max-width: 100%;">
            </a>
            <!-- Información sobre Boca Juniors -->
          </div>
          <div class="col-md-6">
            <p class="text-center"><strong>Manchester United</strong></p>
            <a href="">
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
        customClass: {
            popup: 'alertgames'
        },
        title: "Juegos",
        html: `
                <div class="row">
                <div class="col-md-3">
                    <div class="row">
                        <p class="text-center"><strong>Rocket league</strong></p>
                        <a href="" class="text-center">
                        <img src="img/rocketleague.png" class="img-fluid row" alt="" style="max-width: 100%;">
                        </a>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="row">
                        <p class="text-center"><strong>Counter strike 2</strong></p>
                        <a href="">
                        <img src="img/cs2.png" class="img-fluid" alt="" style="max-width: 100%;">
                        </a>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="row">
                        <p class="text-center"><strong>League of Legends</strong></p>
                        <a href="">
                        <img src="img/lol.png" class="img-fluid" alt="" style="max-width: 100%;">
                        </a>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="row">
                        <p class="text-center" style="width: 100%;"><strong>Fortnite</strong></p>
                        <a href="">
                            <img src="img/fortnite.png" class="img-fluid" alt="" style="max-width: 100%;">
                        </a>
                    </div>
                </div>
                </div>`,
        imageAlt: "Custom image",
        confirmButtonText: 'Cerrar',
        
    });
}

function musica(){
    Swal.fire({
        title: "Datos de youtube Music",
        html: `<div class="" style="display: flex; width: 100%; justify-content: space-around;">
                    <div class="" style="border: 1px solid #dee2e6; border-radius: 10px; margin: 0 5px; box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2)">
                        <div class="">
                            <p class="text-center"><strong>Bizarrap</strong></p>
                            <a href="https://music.youtube.com/channel/UCONiUl5u7y2bMaVZJcuRDEQ" target="_blank">
                                <img src="https://lh3.googleusercontent.com/vEkJjs-EZmAYP3ukHzky6kLxLaA1dGuGGUDvJcNQXHBaAXp4xajwptJlT20BXl-qsx18EcQLqJWiUCQ=w226-h226-p-l90-rj" class="img-fluid" alt="" style="max-width: 90%; border-radius: 50%;">
                            </a>
                            <p style="color: #aeaeae;"><br>3 horas</p>
                        </div>
                    </div>
                    <div class="" style="border: 1px solid #dee2e6; border-radius: 10px; margin: 0 5px;box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2)">
                        <div class="">
                            <p class="text-center"><strong>Natanael Cano</strong></p>
                            <a href="https://music.youtube.com/channel/UC47k7qXysCBKeaYfc1zmkIA" target="_blank">
                                <img src="https://lh3.googleusercontent.com/DWjU27gVHhvBXxsjHw1vZ9xgJydt7fClzA99cTslAt98PDr5NJP_67it56ClwMjCp8K_ceXbMP9gig=w226-h226-p-l90-rj" class="img-fluid" alt="" style="max-width: 90%; border-radius: 50%;">
                            </a>
                            <p style="color: #aeaeae;"><br>3 horas</p>
                        </div>
                    </div>
                    <div class="" style="border: 1px solid #dee2e6; border-radius: 10px; margin: 0 5px;box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2)">
                        <div class="">
                            <p class="text-center"><strong>Milo J</strong></p>
                            <a href="https://music.youtube.com/channel/UCLabAHLHMy2MdTWaZATUmQQ" target="_blank">
                                <img src="https://lh3.googleusercontent.com/QZIwXSGT_gU5EHz5PbfLdPyZfDnvVLhFqnZSN44jadallrwWODt39WlxXWDtX_zJqroMIqDX33_7G1ruOA=w226-h226-l90-rj" class="img-fluid" alt="" style="max-width: 90%; border-radius: 50%;">
                            </a>
                            <p style="color: #aeaeae;"><br>2 horas</p>
                        </div>
                    </div>
                    <div class="" style="border: 1px solid #dee2e6; border-radius: 10px; margin: 0 5px;box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2)">
                        <div class="">
                            <p class="text-center"><strong>DUKI</strong></p>
                            <a href="https://music.youtube.com/channel/UCtLchRAZex11gn-ah1_1Pgw" target="_blank">
                                <img src="https://lh3.googleusercontent.com/wA3R9zzDXh-Fc9clFDYvPMmnuejcqtIK9b2x5_eAphJb_EwMYuPA7pLbioka_xKdNung73UH_JqzYQ=w226-h226-p-l90-rj" class="img-fluid" alt="" style="max-width: 90%; border-radius: 50%;">
                            </a>
                            <p style="color: #aeaeae;"><br>2 horas</p>
                        </div>
                    </div>
                    <div class="" style="border: 1px solid #dee2e6; border-radius: 10px; margin: 0 5px;box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2)">
                        <div class="">
                            <p class="text-center"><strong>Thiago PZK</strong></p>
                            <a href="https://music.youtube.com/channel/UCjYEamX786QxvyO527ezaaw" target="_blank">
                                <img src="https://lh3.googleusercontent.com/Cd5f_-OcMGNwpnJ-KCzzUX2H8sRDdXABY4PnC2Z-XNs8KbYCjVyUEhLGAzA28gtjGbuhi_zi1FD35g=w226-h226-p-l90-rj" class="img-fluid" alt="" style="max-width: 90%; border-radius: 50%;">
                            </a>
                            <p style="color: #aeaeae;"><br>1 horas</p>
                        </div>
                    </div>
                </div>`,
        imageAlt: "Custom image",
        confirmButtonText: 'Cerrar',
        customClass: {
            popup: 'alertgames'
        },
    });
}


