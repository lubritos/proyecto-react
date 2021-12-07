import { useNavigate } from "react-router-dom";

const FormularioCompras = () => {
    const navigate  = useNavigate();
    const finalizarCompra =()=>{
        navigate('/exito');
    }
    return (
        <div className="d-flex justify-content-center">
            <div className="col-md-7 col-lg-8 m-5 m-3">
            <h4 className="mb-3 fw-bold text-capitalize fs-2">Formulario de compra</h4>
                <form className="needs-validation" noValidate="">
                    <div className="row g-3">
                        <div className="col-sm-6">
                        <label htmlFor="firstName" className="form-label text-capitalize fs-4">nombre</label>
                        <input type="text" className="form-control" id="firstName" placeholder=""  required />
                        <div className="invalid-feedback">
                            Nombre requerido.
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="lastName" className="form-label text-capitalize fs-4">Apellido</label>
                        <input type="text" className="form-control" id="lastName" placeholder="" required/>
                        <div className="invalid-feedback">
                            Apellido requerido.
                        </div>
                    </div>
                    <div className="col-12">
                        <label htmlFor="username" className="form-label text-capitalize fs-4">Usuario</label>
                        <div className="input-group has-validation">
                            <span className="input-group-text">@</span>
                            <input type="text" className="form-control" id="username" placeholder="Usuario" required/>
                            <div className="invalid-feedback text-capitalize fs-4">
                                Usuario requerido.
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <label htmlFor="email" className="form-label text-capitalize fs-4">Email <span className="text-muted">(Opcional)</span></label>
                        <input type="email" className="form-control" id="email" placeholder="you@example.com" required/>
                        <div className="invalid-feedback">
                            Por favor ingrese una direccion de email valida.
                        </div>
                    </div>
                        <div className="col-12">
                            <label htmlFor="address" className="form-label text-capitalize fs-4">direccion</label>
                            <input type="text" className="form-control" id="address" placeholder="" required/>
                            <div className="invalid-feedback">
                                Por favor ingrese una direccion.
                        </div>                            
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="country" className="form-label text-capitalize fs-4">pais</label>
                        <select className="form-select text-capitalize fs-4" id="country" required>
                            <option value="">Choose...</option>
                            <option>Argentina</option>
                        </select>
                        <div className="invalid-feedback">
                            Por favor ingrese un pais valido.
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="state" className="form-label text-capitalize fs-4">provincia</label>
                        <select className="form-select text-capitalize fs-4" id="state" required>
                            <option value="">Choose...</option>
                            <option>cordoba</option>
                        </select>
                        <div className="invalid-feedback">
                            Por favor ingrese una provincia valida.
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="zip" className="form-label text-capitalize fs-4">codigo postal</label>
                        <input type="text" className="form-control text-capitalize fs-4" id="zip" placeholder="" required/>
                        <div className="invalid-feedback">
                            codigo postal requerido.
                        </div>
                    </div>
                </div>
                <hr className="my-4"/>
                <hr className="my-4"/>
                <button 
                    className="fin-compra w-100 btn bg-purple text-white btn-lg text-capitalize fs-4"
                    type="submit"
                    onClick={() => finalizarCompra()}
                    >finalizar la compra</button>
            </form>
        </div>
    </div>
    )
}
export default FormularioCompras;