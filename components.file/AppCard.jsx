function AppCard({key,title, image, }) {
    return (
        <div id={key} className="card">
            <img src={image} />
            <h6>{title}</h6>
        </div>
    );
}
export default AppCard;