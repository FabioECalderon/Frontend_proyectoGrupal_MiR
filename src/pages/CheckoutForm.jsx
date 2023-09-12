export default function CheckoutForm() {
  return (
    <>
      <section id="personalDataConfirmation" class="p-5">
        <div class="container">
          <h1>Reservar Cita</h1>
        </div>
        <div class="container p-3">
          <h2>Confirma tus datos personales</h2>
          <form>
            <fieldset disabled>
              <div class="mb-3 p-2">
                <label for="disabledTextInput" class="form-label p-2 fs-4">
                  Informacion personal*
                </label>
                <input
                  type="text"
                  id="disabledTextInput"
                  class="form-control"
                  placeholder="Nombres y apellidos"
                />
              </div>
              <div class="mb-3 p-2">
                <label for="disabledTextInput" class="form-label p-2 fs-4">
                  Informacion de contacto*
                </label>
                <input
                  type="text"
                  id="disabledTextInput"
                  class="form-control"
                  placeholder="Número de celular"
                />
              </div>
            </fieldset>
            <button type="submit" class="btn btn-lg btn-primary">
              Confirmar y agendar cita
            </button>
          </form>
        </div>
        <div></div>
      </section>
    </>
  );
}
