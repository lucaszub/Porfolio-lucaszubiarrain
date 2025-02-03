


function App() {
  return (
    <div className="bg-white w-full min-h-screen flex justify-center items-start p-5 overflow-y-auto">
      <div className="bg-background shadow max-w-7xl mx-auto min-h-screen rounded-3xl p-8 flex flex-col">
        
        {/* Section Nom et Navbar */}
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <a href="https://github.com/lucaszub" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-xl"></i>
            </a>
            <h1 className="font-[Elza] ml-4 text-lg font-bold">Lucas Zubiarrain</h1>
          </div>

          <div className="flex space-x-8 items-center flex-1 justify-end">
            <h1 className="font-[Elza]">Page d'accueil</h1>
            <h1 className="font-[Elza]">Mon expèrience</h1>
            <h1 className="font-[Elza]">Projets</h1>
            <h1 className="font-[Elza]">Blog</h1>
            <div className="font-[Elza] px-4 py-2 rounded-full bg-button  hover:bg-button-hover">
              Contactez moi
            </div>
            <a href="https://www.linkedin.com/in/lucas-zubiarrain/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="flex flex-1 w-full items-center mt-20">
          {/* Colonne gauche (Photo) */}
          <div className="flex-1 flex flex-col items-center space-y-10">
            <div className="w-80 h-80 rounded-full overflow-hidden">
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
              Je vous aide à automatiser vos processus pour vous faire gagner du temps. </div>
            <div className="font-[Recoleta] text-xl font-light">
              Bonjour, je suis Lucas. Consultant et développeur, je suis spécialisé dans l'automatisation des tâches répétitives et l’optimisation des processus grâce à des solutions adaptées (Python, Cloud, DevOps). Mon objectif est de vous permettre de travailler plus efficacement et de libérer du temps pour vos priorités.
            </div>
            <div className="font-[Recoleta] text-xl font-light">  

              J’aime apprendre et je reste disponible pour échanger sur vos projets ou vous donner des conseils. Si vous souhaitez discuter ou partager des idées, n’hésitez pas à me contacter.
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
            alt="Github action"/>
            <div className="font-[Recoleta] font-black">Github action </div>
        </div>
       
        <div className=" flex gap-5 flex-col justify-center items-center">
          <img
            src="icons8-puissance-bi-2021-48.png"
            className="w-20 h-20 object-cover"
            alt="Power bi "/>
          
          <div className="font-[Recoleta] font-black">Power bi </div>

        </div>

        
        
        </div>
   

        
        {/* Section supplémentaire en bas */}
        <div className="flex flex-row gap-5 mt-5">
          <div className="font-[Recoleta] bg-red-400 w-full flex flex-1 text-3xl font-bold"> 
            
            <div>Mon experience</div></div>
            <div className="w-full p-5 flex flex-col items-center bg-white rounded-2xl">
            
              <h2 className="font-[Recoleta] flex-1 text-xl font-bold">Requeteur snowflakes</h2>
              <p className="text-lg mt-4 text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam iure ducimus, commodi dolor, accusamus non minus excepturi deleniti deserunt eligendi voluptate adipisci omnis et velit facilis tempora. Rem, ab at?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorum beatae facere ipsum quidem quia similique voluptatum! Harum consequuntur repellendus aut, inventore natus sunt, quasi quae quo vero id ullam! test
              </p>
            </div>
            </div>

          {/* <div className=" p-5 w-full flex flex-col items-center bg-white rounded-2xl">
            <h2 className="font-[Recoleta] text-xl font-bold">Automatisation & Monitoring avec Alteryx</h2>
            <p className="text-lg mt-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam iure ducimus, commodi dolor, accusamus non minus excepturi deleniti deserunt eligendi voluptate adipisci omnis et velit facilis tempora. Rem, ab at?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorum beatae facere ipsum quidem quia similique voluptatum! Harum consequuntur repellendus aut, inventore natus sunt, quasi quae quo vero id ullam!
            </p>
          </div>
          <div className=" p-5 w-full flex flex-col items-center bg-white rounded-2xl">
            <h2 className="font-[Recoleta] text-xl font-bold">Gestion automatisée des factures</h2>
            <p className="text-lg mt-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam iure ducimus, commodi dolor, accusamus non minus excepturi deleniti deserunt eligendi voluptate adipisci omnis et velit facilis tempora. Rem, ab at?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorum beatae facere ipsum quidem quia similique voluptatum! Harum consequuntur repellendus aut, inventore natus sunt, quasi quae quo vero id ullam!
            </p>
          </div> */}
        
      </div>
    </div>
  );
}

export default App;
