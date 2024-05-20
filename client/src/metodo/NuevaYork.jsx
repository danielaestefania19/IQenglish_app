import NuevaYork3 from "../assets/NuevaYork3.jpg"

const NuevaYork = () => {
    return (
        <section
        className="w-full h-full mt-[-1px] pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px] flex justify-center items-center"
        style={{
            backgroundImage: `url(${NuevaYork3})`,
            backgroundSize: 'cover', // Asegura que la imagen cubra todo el contenedor
            backgroundPosition: 'center', // Centra la imagen
            backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
            imageRendering: 'auto' // Ayuda a mantener la calidad de la imagen
        }}
    >
        <div className="container mx-auto">
            <div className="w-[60vw] mx-auto flex justify-center flex-col items-center -mt-4 mb-12">
                <h1 className="text-2xl font-bold tracking-tight text-primary sm:text-4xl font-popping text-center mb-4">
                    ¡Viaja a Nueva York!
                </h1>
                <p className="mb-2 max-w-[600px] text-xl lg:text-2xl text-dark dark:text-dark-4 font-normal text-center" style={{ letterSpacing: '-0.01em' }}>
                    Al concluir tu preparación bilingüe en IQ English en 12 meses o menos, podrás vivir esta experiencia que cambiará tu vida y relación con el idioma.
                </p>
                <p className="text-lg leading-relaxed text-white dark:text-dark-6 font-popping text-center mt-4">
                    Durante una semana perfecciona tu inglés en el College of Mount Saint Vincent y explora de cerca los lugares más emocionantes de la ciudad de Nueva York. ¡Inscríbete ahora!
                </p>
            </div>
        </div>
    </section>
    );
};

export default NuevaYork;

