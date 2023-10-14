import DoctorCard from './DoctorCard';

export default function ResultList({ list = [] }) {
  return list.map(function (item) {
    return (
      <DoctorCard
        key={item.id}
        fullName={item.fullName}
        specialty={item.specialtyId}
        center={item.centerId}
        photo={item.photo}
      />
    );
  });
}
