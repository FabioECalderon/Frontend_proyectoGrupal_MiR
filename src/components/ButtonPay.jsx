import { Button } from 'react-bootstrap';
import { createOrder } from '../api/createOrder';

export default function RedirectionButton() {
  const handleRedirection = async () => {
    createOrder();
  };

  return (
    <Button className="mb-5 text-white" onClick={handleRedirection}>
      Paga tu cita medica con{' '}
      <span style={{ fontWeight: 'bold', color: 'yellow' }}>Mercado Pago</span>
    </Button>
  );
}
