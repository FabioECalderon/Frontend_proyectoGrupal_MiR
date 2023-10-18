import { useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

export default function RedirectionButton() {
  const handleRedirection = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/mercadopago/create-order',
      );
      const { init_point } = response.data;
      window.location.href = init_point;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button className="mb-5 text-white" onClick={handleRedirection}>
      Paga tu cita medica con{' '}
      <span style={{ fontWeight: 'bold', color: 'yellow' }}>Mercado Pago</span>
    </Button>
  );
}
