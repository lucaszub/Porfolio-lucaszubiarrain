function App() {
  return (
    <div className="bg-white w-full min-h-screen flex justify-center items-start p-5 overflow-y-auto">
      <div className="bg-background shadow max-w-7xl mx-auto min-h-screen rounded-3xl p-8 flex flex-col">
        {/* Section Nom et Navbar */}
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <a
              href="https://github.com/lucaszub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <h1 className="font-[Elza] ml-4 text-lg font-bold">
              Lucas Zubiarrain
            </h1>
          </div>

          <div className="flex space-x-8 items-center flex-1 justify-end">
            <h1 className="font-[Elza]">Page d'accueil</h1>
            <h1 className="font-[Elza]">Mon expèrience</h1>
            <h1 className="font-[Elza]">Projets</h1>
            <h1 className="font-[Elza]">Blog</h1>
            <div className="font-[Elza] px-4 py-2 rounded-full bg-button  hover:bg-button-hover">
              Contactez moi
            </div>
            <a
              href="https://www.linkedin.com/in/lucas-zubiarrain/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="flex flex-1 w-full items-center mt-20">
          {/* Colonne gauche (Photo) */}
          <div className="flex-1 flex flex-col items-center space-y-10">
            <div className="w-70 h-70 rounded-full overflow-hidden shadow-md">
              <img
                src="/Lucas Zubiarrain.jpg"
                alt="Lucas Zubiarrain"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div></div>
          {/* Colonne droite (Texte) */}
          <div className="flex-1 flex flex-col justify-center items-start space-y-6">
            <div className="font-[Recoleta] text-3xl font-bold">
              Je vous aide à automatiser vos processus pour vous faire gagner du
              temps.{" "}
            </div>
            <div className="font-[Recoleta] text-xl font-light">
              Bonjour, je suis Lucas. Consultant et développeur, je suis
              spécialisé dans l'automatisation des tâches répétitives et
              l’optimisation des processus grâce à des solutions adaptées
              (Python, Cloud, DevOps). Mon objectif est de vous permettre de
              travailler plus efficacement et de libérer du temps pour vos
              priorités.
            </div>
            <div className="font-[Recoleta] text-xl font-light">
              J’aime apprendre et partager mes connaissances. Si vous souhaitez
              échanger sur vos projets ou en savoir plus sur ce que je fais, je
              serai ravi de prendre un moment pour en discuter avec vous.
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center mt-15 items-center flex-row gap-20">
          <div className="flex flex-col gap-3 items-center">
            <img
              src="/App-Services.svg"
              className="w-20 h-20 object-cover"
              alt="App services"
            />

            <div className="font-[Recoleta] font-black">Azure App Services</div>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <img
              src="/azurefunctions-icon.svg"
              className="w-20 h-20 object-cover"
              alt="Azure Functions"
            />

            <div className="font-[Recoleta] font-black">Azure Function</div>
          </div>
          <div className="flex flex-col  gap-3 items-center">
            <img
              src="/python-svgrepo-com.svg"
              className="w-20 h-20 object-cover"
              alt="Python"
            />
            <div className="font-[Recoleta] font-black">Python</div>
          </div>

          <div className=" flex gap-5 flex-col">
            <img
              src="github.svg"
              className="w-20 h-20 object-cover"
              alt="Github action"
            />
            <div className="font-[Recoleta] font-black">Github action </div>
          </div>

          <div className=" flex gap-5 flex-col justify-center items-center">
            <img
              src="icons8-puissance-bi-2021-48.png"
              className="w-20 h-20 object-cover"
              alt="Power bi "
            />

            <div className="font-[Recoleta] font-black">Power bi </div>
          </div>
        </div>
        <div className="w-full mt-10 flex justify-center items-center">
          <div className="font-[Recoleta] flex  text-xl font-bold ">
            Mon experience
          </div>
        </div>

        {/* Section supplémentaire en bas */}
        <div className="flex flex-row gap-5 mt-5">
          <div className="w-full p-5 flex flex-col items-center bg-white rounded-2xl shadow-md cursor-pointer transition-transform hover:scale-105">
            <div className="flex flex-row w-full justify-between items-center">
              <h2 className="font-[Recoleta] text-xl font-bold">Polarys</h2>
              <div className="font-[Recoleta] font-medium">
                09/2023 - 09/2024
              </div>
            </div>
            <h3 className="text-lg mt-4 text-center font-semibold">
              Développement d'un Outil de Requête pour Snowflake
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              Automatisation et simplification des requêtes SQL sur Snowflake
              avec gestion des formats JSON/CSV, intégration à Azure et
              sécurisation des accès.
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
              <h2 className="font-[Recoleta] text-xl font-bold">
                Projet d'Automatisation
              </h2>
              <div className="font-[Recoleta] font-medium">2024</div>
            </div>
            <h3 className="text-lg mt-4 text-center font-semibold">
              Automatisation des Flux de Données et Reporting
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              Développement de processus automatisés pour extraire, transformer
              et charger des données en utilisant des outils cloud et des API
              tierces.
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
              <h2 className="font-[Recoleta] text-xl font-bold">Projet Make</h2>
              <div className="font-[Recoleta] font-medium">2024</div>
            </div>
            <h3 className="text-lg mt-4 text-center font-semibold">
              Intégration et Automatisation avec Make
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
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
    </div>
  );
}

export default App;
