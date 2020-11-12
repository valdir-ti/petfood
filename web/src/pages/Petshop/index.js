import Header from '../../components/Header';
import PetloveLogo from '../../assets/images/logo-petlove.png';

import './styles.css';

const Petshop = () => {
  return (
    <div className="h-100">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src={PetloveLogo} alt="Logo Empresa" className="img-fluid petshop-image"/>
            <b>Petlove</b>
            <div className="petshop-info">
              <span className="mdi mdi-star"></span>
              <text>
                <b>2,8</b>
              </text>
              <span class="mdi mdi-cash-usd-outline"></span>
              <text>$$$</text>
              <span class="mdi mdi-crosshairs-gps"></span>
              <text>12km</text>
            </div>
            <label className="badge badge-primary">Frete Grátis</label>
          </div>
          <div className="col-10">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Petshop;