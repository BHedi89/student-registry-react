import React from "react";
import { Component } from "react";
import "./ModifyStudentModal.css";

class ModifyStudentModal extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  handleClose = () => {
      this.setState({
          show: false
      })
  }


  render() {
    const showHideClassName = this.state.show ? "modal d-block" : "modal d-none";
    return (
      <div className={showHideClassName}>
        <div className="modal-container">
          <form>
            <div className="modal-header">
              <h4 className="modal-title">Módosítás</h4>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="inputName">Név</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Név"
                  // formControlName="name"
                />
                {/* <div class="invalid-feedback" *ngIf="form.controls.name.errors?.required">
            Név megadása kötelező
        </div> */}
              </div>
              <div className="form-group">
                <label htmlFor="inputEmail">E-mail cím</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="E-mail cím"
                //   formControlName="email"
                />
                {/* <div class="invalid-feedback" *ngIf="form.controls.email.errors?.required">
            E-mail cím megadása kötelező
        </div> */}
                {/* <div class="invalid-feedback" *ngIf="form.controls.email.errors?.email">
            Nem valós e-mail cím
        </div> */}
              </div>
              <div className="form-group">
                <label htmlFor="inputAge">Életkor</label>
                <input
                  type="number"
                  className="form-control"
                  name="age"
                  placeholder="Életkor"
                //   formControlName="age"
                />
                {/* <div class="invalid-feedback" *ngIf="form.controls.age.errors?.required">
            Életkor megadása kötelező
        </div>
        <div class="invalid-feedback" *ngIf="form.controls.age.errors?.min">
            Legalább 18-nak kell lennie
        </div>
        <div class="invalid-feedback" *ngIf="form.controls.age.errors?.max">
            Legfeljebb 100-nak szabad lennie
        </div> */}
              </div>
              <div className="form-group">
                <label className="mr-2" htmlFor="inputGender">
                  Nem
                </label>
                <select
                  className="custom-select my-1 mr-sm-2"
                  name="gender"
                //   formControlName="gender"
                >
                  <option value="FEMALE">Nő</option>
                  <option value="MALE">Férfi</option>
                  <option value="2">Egyéb</option>
                  <option value="3">Nem szeretném megadni</option>
                </select>
                {/* <div class="invalid-feedback" *ngIf="form.controls.gender.errors?.binary">
            Kötelező: Férfi vagy Nő
        </div> */}
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-dark" onClick={this.handleClose}>
                Mégsem
              </button>
              <button className="btn btn-primary" type="submit">
                Mentés
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ModifyStudentModal;
