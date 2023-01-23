using Bodega.DbContex;
using Bodega.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bodega.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EntradaController : ControllerBase
    {
        private MyDbContext MyDbContext;

        public EntradaController(MyDbContext myDbContext)
        {
            MyDbContext = myDbContext;
        }
        private bool Entrada(long id)
        {
            {
                return MyDbContext.enradas.Any(x => x.Id == id);

            }
            
        }
        [HttpGet("Entrada")]
        [ProducesResponseType(typeof(List<Enrada>), 200)]
        public async Task<ActionResult<Enrada>> getenradaid(int id)
        {
            var entrada =await MyDbContext.enradas.FindAsync(id);
            if (entrada==null)
            {
                return NotFound();
            }
            return Ok(entrada);
        }
    }
}
