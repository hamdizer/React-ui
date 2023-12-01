import "./SalesMenu.css"

const sales= ["Nouvelle vente","Résumé des ventes quotidiennes","rendez-vous","ventes","paiements","Cartes cadaux","Abonnements"]
const SalesMenu=(props)=>{
    return (
        <div className="sales_items">
            {sales.map((item)=><p className="item" >
                {item}</p>)}

        </div>
    )

}
export default SalesMenu