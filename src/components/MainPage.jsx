import "./MainPage.css"
const MainPage=()=>{
    return <div style={{display:"inline-flex"}} className="main">
        <div  className="text_btn">
            <h1>
                Une solution de point de vente pour gérer l'ensemble de votre entreprise
            </h1>
            <br/>
            <p>
                Gérez les ventes, encaissez les paiements, recueillez les pourboires et générez vos rapports financiers de façon simple, sécurisée et efficace.
            </p>
            <ul>
                <li>Une façon pratique et rapide d'encaisser vos clients en un éclair</li>
                <li>Vendez facilement des prestations, des produits, des abonnements et des cartes cadeaux</li>
                <li>Rapprochez rapidement vos comptes grâces à des rapports pertinents sur les ventes et les paiements

                </li>
            </ul>
            <div className="btn_groups">
                <button className="start">Commencer maintenant</button>
                <a>En savoir plus</a>


            </div>

        </div>
        <img width="50%" height="100%" src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*bmNDnlSQQUYx72s4j3dgZA.png" />

    </div>
}
export default MainPage