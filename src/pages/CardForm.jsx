
const CardForm = () => {
  return (
    <div>
        <div className="Container">
        <div className="glass-effect">
        <h2>Card Form</h2>
            <div className="form-group">
                <label className="col-form-label col-form-label-sm mt-4" htmlFor="inputSmall">Titulo</label>
                <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" id="inputSmall" />
            </div>
            <div className="form-group">
                <label className="col-form-label col-form-label-sm mt-4" htmlFor="inputSmall">Sinopsis</label>
                <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" id="inputSmall" />
            </div>
            <div className="form-group">
                <label className="col-form-label col-form-label-sm mt-4" htmlFor="inputSmall">Poster Link</label>
                <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" id="inputSmall" />
            </div>
            <div className="form-group">
                <label className="col-form-label col-form-label-sm mt-4" htmlFor="inputSmall">Fecha de estreno</label>
                <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" id="inputSmall" />
            </div>
            <div className="form-group">
                <label className="col-form-label col-form-label-sm mt-4" htmlFor="inputSmall">Calificación promedio</label>
                <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" id="inputSmall" />
            </div>
            <div className="form-group">
                <label className="col-form-label col-form-label-sm mt-4" htmlFor="inputSmall">Likes</label>
                <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" id="inputSmall" />
            </div>
            <button className="btn btn-lg btn-primary" type="button">Block button</button>
        </div>
        </div>
    </div>
)
}

export default CardForm