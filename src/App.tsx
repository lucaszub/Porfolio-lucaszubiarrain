import { useEffect } from "react";
import Navbar from "./Navbar";

function App() {
  useEffect(() => {
    // C'est ici que tu ajoutes le comportement du défilement fluide
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();

        // Récupère l'élément cible en fonction de l'id
        const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute(
          "href"
        );
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
            });
          }
        }
      });
    });
  }, []);
  return (
    <div className="bg-white w-full min-h-screen flex justify-center items-start p-5 overflow-y-auto flex-col">
      <div className="bg-background shadow max-w-7xl mx-auto min-h-screen rounded-3xl p-8 flex flex-col">
        {/* Section Nom et Navbar */}
        <Navbar />
        {/* Contenu principal */}
        <div
          id="about"
          className="flex flex-col lg:flex-row w-full items-center lg:mt-15     mt-20 sm:mt-5"
        >
          {/* Colonne gauche (Photo) */}
          <div className="flex-1 flex justify-center  mb-5  lg:flex-col items-center w-full  space-y-10">
            <div className="w-40 h-40  sm:w-56 sm:h-56 md:w-50 md:h-50 rounded-full overflow-hidden shadow-md    flex justify-center items-center ">
              <img
                src="/Lucas Zubiarrain.jpg"
                alt="Lucas Zubiarrain"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Colonne droite (Texte) */}
          <div className="flex-1 flex flex-col justify-center items-start space-y-6">
            <div className="text-3xl font-semibold">
              Je vous aide à automatiser vos processus pour vous faire gagner du
              temps.
            </div>
            <div className="text-xl font-light">
              Bonjour, je suis Lucas. Consultant et développeur, je suis
              spécialisé dans l'automatisation des tâches répétitives et
              l’optimisation des processus grâce à des solutions adaptées
              (Python, Cloud, DevOps). Mon objectif est de vous permettre de
              travailler plus efficacement et de libérer du temps pour vos
              priorités.
            </div>
            <div className="text-xl font-light">
              J’aime apprendre et partager mes connaissances. Si vous souhaitez
              échanger sur vos projets ou en savoir plus sur ce que je fais, je
              serai ravi de prendre un moment pour en discuter avec vous.
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center mb-10 mt-15 items-center flex-wrap lg:flex-nowrap gap-10">
          <div className="flex flex-col gap-3 items-center">
            <img
              src="/App-Services.svg"
              className="w-20 h-20 object-cover"
              alt="App services"
            />
            <div className="font-black">Azure App Services</div>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <img
              src="/azurefunctions-icon.svg"
              className="w-20 h-20 object-cover"
              alt="Azure Functions"
            />
            <div className="font-black">Azure Function</div>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <img
              src="/python-svgrepo-com.svg"
              className="w-20 h-20 object-cover"
              alt="Python"
            />
            <div className="font-black">Python</div>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <img
              src="github.svg"
              className="w-20 h-20 object-cover"
              alt="Github action"
            />
            <div className="font-black">Github action</div>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <img
              src="icons8-puissance-bi-2021-48.png"
              className="w-20 h-20 object-cover"
              alt="Power bi"
            />
            <div id="experience" className="font-black">
              Power bi
            </div>
          </div>
        </div>

        {/* Section supplémentaire en bas */}
        <div className="flex lg:flex-row flex-col gap-5 mt-5">
          <div className="w-full p-5 flex flex-col items-center bg-white rounded-2xl shadow-md cursor-pointer transition-transform hover:scale-105">
            <div className="flex flex-row w-full justify-between items-center">
              <h2 className="text-xl font-bold">Polarys</h2>
              <div className="font-medium">09/2023 - 09/2024</div>
            </div>
            <h3 className="text-lg mt-4 text-center font-semibold">
              Développement d'un Outil de Requête pour Snowflake
            </h3>
            <p className="text-sm text-center mt-2">
              Automatisation des chargements de données d'Alteryx vers Oracle
              avec mise en place d'un système de monitoring sur Power BI pour
              assurer la fiabilité et la gestion des erreurs.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 mt-4">
              <img
                src="azure-svgrepo-com.svg"
                alt="Azure"
                className="w-22 h-22"
              />
              <img
                src="python-svgrepo-com.svg"
                alt="python"
                className="w-17 h-17"
              />
              <img src="Snowflakes.svg" alt="Snowflake" className="w-17 h-17" />
            </div>
          </div>

          <div className="w-full p-5 flex flex-col items-center bg-white rounded-2xl shadow-md cursor-pointer transition-transform hover:scale-105">
            <div className="flex flex-row w-full justify-between items-center">
              <h2 className="text-xl font-bold">Silamir/Polarys</h2>
              <div className="font-medium">09/2023 - 02/2025</div>
            </div>
            <h3 className="text-lg mt-4 text-center font-semibold">
              Automatisation Chargement Alteryx Oracle
            </h3>
            <p className="text-sm text-center mt-2">
              Automatisation des chargements de données d'Alteryx vers Oracle
              avec mise en place d'un système de monitoring sur Power BI pour
              assurer la fiabilité et la gestion des erreurs.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 mt-4">
              <img src="/icons/python.svg" alt="Python" className="h-6" />
              <img src="/icons/azure.svg" alt="Azure" className="h-6" />
              <img src="/icons/airflow.svg" alt="Airflow" className="h-6" />
              <img src="/icons/powerbi.svg" alt="Power BI" className="h-6" />
            </div>
          </div>

          <div className="w-full p-5 flex flex-col items-center bg-white rounded-2xl shadow-md cursor-pointer transition-transform hover:scale-105">
            <div className="flex flex-row w-full justify-between items-center">
              <h2 className="text-xl font-bold">Projet Make</h2>
              <div className="font-medium">2024</div>
            </div>
            <h3 className="text-lg mt-4 text-center font-semibold">
              Intégration et Automatisation avec Make
            </h3>
            <p className="text-sm text-center mt-2">
              Mise en place de workflows automatisés via Make pour synchroniser
              les données entre différentes plateformes SaaS et améliorer
              l'efficacité des processus métier.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 mt-4">
              <img src="/icons/make.svg" alt="Make" className="h-6" />
              <img src="/icons/api.svg" alt="API" className="h-6" />
              <img
                src="/icons/google-sheets.svg"
                alt="Google Sheets"
                className="h-6"
              />
              <img src="/icons/webhook.svg" alt="Webhook" className="h-6" />
            </div>
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="w-full bg-background max-w-7xl flex justify-center mt-10 mx-auto p-5 rounded-3xl"
      >
        <div className="mx-auto flex justify-center">
          <div className="text-center space-y-4">
            <h2 className="text-xl font-bold">Contactez-moi</h2>
            <p className="text-lg font-light">
              Vous souhaitez échanger sur vos projets ou en savoir plus sur moi
              ? N'hésitez pas à me contacter !
            </p>
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {/* GitHub Icon */}
              <a
                href="https://github.com/lucaszub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg flex flex-col items-center"
              >
                <i className="fab fa-github text-2xl"></i>
                <span className="text-sm">GitHub</span>
              </a>

              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/in/lucas-zubiarrain/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg flex flex-col items-center"
              >
                <i className="fab fa-linkedin text-2xl"></i>
                <span className="text-sm">LinkedIn</span>
              </a>

              {/* Email Icon */}
              <a
                href="mailto:zubiarrainlucas@gmail.com"
                className="text-lg flex flex-col items-center"
              >
                <i className="fas fa-envelope text-2xl"></i>
                <span className="text-sm">zubiarrainlucas@gmail.com</span>
              </a>

              {/* Phone Icon */}
              <a
                href="tel:+33619449133"
                className="text-lg flex flex-col items-center"
              >
                <i className="fas fa-phone text-2xl"></i>
                <span className="text-sm">+33 6 19 44 91 33</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
