export default function ReflexionUXPage(){
    return(
        <div className="reflex-container">
            <section className="reflex-intro flex flex-col items-center text-center mb-10 mt-10">
                 <img
                    src="/images/meSmiley.png"
                    alt="photo de profil"
                    className="w-[150px] h-[150px] rounded-full mb-5"
                />
                <h1 className="underline text-2xl">Introduction</h1>
                <p className="w-300 mt-10">Bienvenue dans la page de Réflexion UX. Ici, je vous partage mes idées derrières la création de mon portfolio.
                    Mon objectif principal n'était pas seulement de le développer techniquement, mais aussi d'offrir 
                    une expérience utilisateur agréable et intuitive à mes visiteurs.
                </p>
            </section>
            <section className="reflex-schema">
                <img
                    src="/images/schema.png"
                    alt="schéma de réflexion UX"
                    className="w-full max-w-4xl mx-auto mb-10"
                />
            </section>
        </div>
    )
}