using LibeyTechnicalTestDomain.LibeyUserAggregate.Application.DTO;
using LibeyTechnicalTestDomain.LibeyUserAggregate.Application.Interfaces;
using LibeyTechnicalTestDomain.LibeyUserAggregate.Domain;
namespace LibeyTechnicalTestDomain.LibeyUserAggregate.Application
{
    public class LibeyUserAggregate : ILibeyUserAggregate
    {
        private readonly ILibeyUserRepository _repository;
        public LibeyUserAggregate(ILibeyUserRepository repository)
        {
            _repository = repository;
        }


        public List<LibeyUserResponse> GetAll()
        {
            var row = _repository.GetAll();
            return row;
        }

        public void Create(UserUpdateorCreateCommand command)
        {
            LibeyUser newUser = new(
                                        command.DocumentNumber,
                                        command.DocumentTypeId,
                                        command.Name,
                                        command.FathersLastName,
                                        command.MothersLastName,
                                        command.Address,
                                        command.UbigeoCode,
                                        command.Phone,
                                        command.Email,
                                        command.Password
                                    );
            _repository.Create(newUser);
        }

        public void Delete(string documentNumber)
        {
            _repository.Delete(documentNumber);
        }

        public LibeyUserResponse FindResponse(string documentNumber)
        {
            var row = _repository.FindResponse(documentNumber);
            return row;
        }

        public void Update(UserUpdateorCreateCommand command)
        {
            //var existingUser = FindResponse(command.DocumentNumber);

            LibeyUser updatedUser = new(
                                        command.DocumentNumber,
                                        command.DocumentTypeId,
                                        command.Name,
                                        command.FathersLastName,
                                        command.MothersLastName,
                                        command.Address,
                                        command.UbigeoCode,
                                        command.Phone,
                                        command.Email,
                                        command.Password
                                       );

            _repository.Update(updatedUser);
        }
    }
}