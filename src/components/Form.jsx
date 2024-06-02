import React, { useState } from 'react';
import styled from 'styled-components';

const Form = ({ handleClose }) => {
  const [step, setStep] = useState(1);
  const [bookingType, setBookingType] = useState('');
  const [location, setLocation] = useState('');
  const [tripDate, setTripDate] = useState('');
  const [coworkingSpace, setCoworkingSpace] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [email, setEmail] = useState('');

  const handleBookingTypeSelection = (type) => {
    setBookingType(type);
    setStep(2);
  };

  const handleLocationSelection = (location) => {
    setLocation(location);
    setStep(3);
  };

  const handleTripDateSelection = (date) => {
    setTripDate(date);
    setStep(4); // Proceed to next step
  };

  const handleCoworkingSpaceSelection = (space) => {
    setCoworkingSpace(space);
    setStep(4);
  };

  const handleTimeSlotSelection = (slot) => {
    setTimeSlot(slot);
    setStep(5); // Proceed to submission
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    alert(`Form submitted!`)
    
    handleClose();
  };

  return (
    <FormSection>
      {step === 1 && (
        <>
          <h2>Hello, Welcome to Nested Nomads</h2>
          <p>What would you like to book?</p>
          <Button onClick={() => handleBookingTypeSelection('trip')} active={bookingType === 'trip'}>
            Trip
          </Button>
          <Button onClick={() => handleBookingTypeSelection('coworking space')} active={bookingType === 'coworking space'}>
            Coworking Space
          </Button>
        </>
      )}

      {step === 2 && bookingType === 'trip' && (
        <>
          <h2>Where would you like to go?</h2>
          <Button onClick={() => handleLocationSelection('Karachi')} active={location === 'Karachi'}>
            Karachi
          </Button>
          <Button onClick={() => handleLocationSelection('Lahore')} active={location === 'Lahore'}>
            Lahore
          </Button>
          <Button onClick={() => handleLocationSelection('Islamabad')} active={location === 'Islamabad'}>
            Islamabad
          </Button>
          <Button onClick={() => handleLocationSelection('Skardu')} active={location === 'Skardu'}>
            Skardu
          </Button>
          <Button onClick={() => handleLocationSelection('Swat')} active={location === 'Swat'}>
            Swat
          </Button>
          <BackButton onClick={handleBack}>Back</BackButton>
        </>
      )}

      {step === 2 && bookingType === 'coworking space' && (
        <>
          <h2>Where would you like to book a slot?</h2>
          <Button onClick={() => handleLocationSelection('Karachi')} active={location === 'Karachi'}>
            Karachi
          </Button>
          <Button onClick={() => handleLocationSelection('Lahore')} active={location === 'Lahore'}>
            Lahore
          </Button>
          <Button onClick={() => handleLocationSelection('Islamabad')} active={location === 'Islamabad'}>
            Islamabad
          </Button>
          <BackButton onClick={handleBack}>Back</BackButton>
        </>
      )}

      {step === 3 && bookingType === 'trip' && (
        <>
          <h2>Select your trip dates</h2>
          <Button onClick={() => handleTripDateSelection('2024-06-01 to 2024-06-07')} active={tripDate === '2024-06-01 to 2024-06-07'}>
            June 1, 2024 - June 7, 2024
          </Button>
          <Button onClick={() => handleTripDateSelection('2024-07-10 to 2024-07-20')} active={tripDate === '2024-07-10 to 2024-07-20'}>
            July 10, 2024 - July 20, 2024
          </Button>
          <Button onClick={() => handleTripDateSelection('2024-08-15 to 2024-08-25')} active={tripDate === '2024-08-15 to 2024-08-25'}>
            August 15, 2024 - August 25, 2024
          </Button>
          <Button onClick={() => handleTripDateSelection('2024-09-05 to 2024-09-12')} active={tripDate === '2024-09-05 to 2024-09-12'}>
            September 5, 2024 - September 12, 2024
          </Button>
          <BackButton onClick={handleBack}>Back</BackButton>
        </>
      )}

      {step === 3 && bookingType === 'coworking space' && (
        <>
          <h2>Select a coworking space in {location}</h2>
          <Button onClick={() => handleCoworkingSpaceSelection(`${location} Cyber Cafe`)} active={coworkingSpace === `${location} Cyber Cafe`}>
            {location} Cyber Cafe
          </Button>
          <Button onClick={() => handleCoworkingSpaceSelection(`${location} Coffee Workers`)} active={coworkingSpace === `${location} Coffee Workers`}>
            {location} Coffee Workers
          </Button>
          <Button onClick={() => handleCoworkingSpaceSelection(`${location} Leet Coders`)} active={coworkingSpace === `${location} Leet Coders`}>
            {location} Leet Coders
          </Button>
          <Button onClick={() => handleCoworkingSpaceSelection(`${location} Work Space`)} active={coworkingSpace === `${location} Work Space`}>
            {location} Work Space
          </Button>
          <Button onClick={() => handleCoworkingSpaceSelection(`${location} Nerd Shack`)} active={coworkingSpace === `${location} Nerd Shack`}>
            {location} Nerd Shack
          </Button>
          <BackButton onClick={handleBack}>Back</BackButton>
        </>
      )}

      {step === 4 && bookingType === 'coworking space' && (
        <>
          <h2>Confirm your time slot</h2>
          <Button onClick={() => handleTimeSlotSelection('9:00 AM - 12:00 PM')} active={timeSlot === '9:00 AM - 12:00 PM'}>
            9:00 AM - 12:00 PM
          </Button>
          <Button onClick={() => handleTimeSlotSelection('1:00 PM - 4:00 PM')} active={timeSlot === '1:00 PM - 4:00 PM'}>
            1:00 PM - 4:00 PM
          </Button>
          <Button onClick={() => handleTimeSlotSelection('5:00 PM - 8:00 PM')} active={timeSlot === '5:00 PM - 8:00 PM'}>
            5:00 PM - 8:00 PM
          </Button>
          <BackButton onClick={handleBack}>Back</BackButton>
        </>
      )}

      {step === 4 && bookingType === 'trip' && (
        <>
          <h2>Booking Details</h2>
          <p>Booking Type: {bookingType}</p>
          <p>Location: {location}</p>
          <p>Trip Date: {tripDate}</p>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={handleSubmit}>Submit</Button>
          <BackButton onClick={handleBack}>Back</BackButton>
        </>
      )}

      {step === 5 && bookingType === 'coworking space' && (
        <>
          <h2>Booking Details</h2>
          <p>Booking Type: {bookingType}</p>
          <p>Location: {location}</p>
          <p>Coworking Space: {coworkingSpace}</p>
          <p>Time Slot: {timeSlot}</p>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={handleSubmit}>Submit</Button>
          <BackButton onClick={handleBack}>Back</BackButton>
        </>
      )}
    </FormSection>
  );
};

const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 2rem;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: ${({ active }) => (active ? '#333' : '#000')};
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #555;
  }
`;

const BackButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #999;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #777;
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
  margin-top: 1rem;
`;

export default Form;