using Bodega.DbContex;
using Bodega.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bodega.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EstadoController : ControllerBase
    {
        private MyDbContext MyDbContext;
        public EstadoController(MyDbContext myDbContext)
        {
            MyDbContext = myDbContext;
        }
        private bool Estado(long id)
        {
            return MyDbContext.products.Any(a => a.Id == id);
        }
        [HttpGet("Estado")]
        [ProducesResponseType(typeof(List<Estado>), 200)]
        public async Task<ActionResult<Estado>> getproductid(long id)
        {
            var estado = await MyDbContext.products.FindAsync(id);
            if (estado == null)
            {
                return NotFound();
            }
            return Ok(estado);
        }
    }
}

