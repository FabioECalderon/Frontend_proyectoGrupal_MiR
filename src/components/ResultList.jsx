import DoctorCard from './DoctorCard';

export default function ResultList({ list = [] }) {
  return list.map(function (doctor) {
    return (
      <DoctorCard
        key={doctor.id}
        fullName={doctor.fullName}
        specialtyId={doctor.specialtyId}
        centerId={doctor.centerId}
        photo={doctor.photo}
        id={doctor.id}
      />
    );
  });
}
