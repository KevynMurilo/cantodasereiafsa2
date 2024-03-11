import React from "react";
import "./media.css"
import icon from "../../assets/image.webp";
import iconLeft from "../../assets/Group 2.png";
import IconRight from "../../assets/testeHeader.png";

const Header = () => {
    const whatsappNumber = '5561981661974';

    // Pré-carregar a imagem assim que o componente for montado
    React.useEffect(() => {
        const img = new Image();
        img.src = IconRight;
    }, []);

    return(
        <header>

             {/*MOBILE*/}
             <section id="header" className="w-full lg:hidden flex flex-col justify-center items-start">
                <div className="w-full">
                    <img src={icon} alt="imagem" className="pointer-events-none" loading="lazy" width="100" height="500" style={{width: "100%", height: "auto"}}/>
                </div>

                <div className="flex flex-col w-full justify-center items-center px-5 mt-10">
                    <h1 className="pb-2 text-4xl font-light text-center">Comida de Qualidade</h1>
                    <p className="text-lg text-center">
                        Experiência gastronômica excepcional com vista deslumbrante no Restaurante Canto da Sereia.
                    </p>
                    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                        <button className="mt-14 w-48 h-14 text-xl lg:text-2xl rounded-full border-2 border-blue-500 shadow-lg">CONTATO</button>
                    </a>
                </div>

                <div className="flex mt-20 justify-start items-start">
                    <img src={iconLeft} alt="iconLeft" className="w-48 h-auto object-cover pointer-events-none"/>
                </div>
            </section>


            {/*DESKTOP*/}
            <section id="headerD" className="header-desktop hidden lg:flex container mx-auto relative h-screen max-w-[2500px]">
                <div className="w-full max-w-70 h-full flex justify-center items-center flex-col pr-40 bg-white">
                    <h1 className="text-6xl mb-5">Comida de Qualidade</h1>
                    <h3 style={{ width: '60%', fontWeight: 400 }} className="text-xl text-center leading-relaxed font-light mb-5">Desfrutar da experiência gastronômica excepcional no Restaurante Canto da Sereia é apreciar não só os sabores requintados, mas também a deslumbrante vista, criando um ambiente único e memorável.</h3>
                    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                        <button className="w-56 h-16 mt-4 text-xl lg:text-2xl rounded-full border-2 border-aquamarine-border shadow-lg hover:bg-aquamarine-bg hover:text-white transition-colors duration-300">
                            CONTATO
                        </button>
                    </a>
                    <nav className="bg-aquamarine-bg absolute left-0 top-[80%] w-52 h-20 flex justify-center items-center shadow-lg rounded-r-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2" />
                        </svg>
                        <h1 className="text-white text-lg lg:text-xl">Formosa</h1>
                    </nav>
                </div>

                <div id="right-div" className="bg-aquamarine-bg w-1/3 h-full flex justify-center items-center">
                    <img id="image-right" src={IconRight} alt="iconRight" className="lg:w-1/3 absolute transform -translate-x-1/4 pointer-events-none z-30 4xl:w-1/4" />
                </div>
            </section>
            
        </header>
    )
}

export default React.memo(Header);