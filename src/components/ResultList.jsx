import DoctorCard from './DoctorCard';

export default function ResultList({ list = [] }) {
  return list.map(function (item) {
    return (
      <DoctorCard
        key={item.id}
        fullName={item.fullName}
        specialtyId={item.specialtyId}
        centerId={item.centerId}
        photo={item.photo}
      />
    );
  });
}
