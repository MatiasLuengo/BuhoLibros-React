import { Brand } from "./Brand";
export const Footer = ({  }) => {
    return (
        <>
        <div id="footer">
            <div className="footerGrid">
                <div className="className">
                    <h4>Nuestra Empresa</h4>
                    <p>Av. Vélez Sarsfield 361, X5000 JJD, Córdoba, Argentina</p>
                    <p>+54 351 0000 0000</p>
                    <a href="mailto:matiasluengoo95@gmail.com">matiasluengoo95@gmail.com</a>
                </div>
                <div className="">
                    <iframe className="footerMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.7912837561166!2d-64.19081782456031!3d-31.41987609641981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a32dcf5d747f%3A0x40373220b29140ac!2sPatio%20Olmos%20Shopping!5e0!3m2!1sen!2sar!4v1692137920989!5m2!1sen!2sar" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="className">
                    <h4>Nuestro Horarios</h4>
                    <p><i className='bx bx-time'></i> LUNES A VIERNES</p>
                    <p>de 8:00 a 12:00 HS. y de 15:30 a 19:30 HS.</p>
                    <p><i className='bx bx-time'></i> SÁBADOS</p>
                    <p>de 9:00 a 12:00 HS.</p>
                </div>
                <div className="className">
                    <h4>Metodos de pago</h4>
                    <img src="../src/assets/pagos.png" alt="Métodos de pago" className="pagos"/>
                </div>
            </div>
            <div className="redes">
                <p>Siguenos en las redes</p>
                <div>
                    <i className='bx bxl-facebook-circle'></i>
                    <i className='bx bxl-instagram' ></i>
                    <i className='bx bxl-youtube' ></i>
                    <i className='bx bxl-twitter' ></i>
                </div>
            </div>
            <Brand></Brand>
        </div>

        </>
    );
};