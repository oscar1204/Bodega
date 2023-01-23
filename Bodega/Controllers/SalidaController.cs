using Bodega.DbContex;
using Bodega.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bodega.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalidaController : ControllerBase
    {
        private MyDbContext MyDbContext;
        public SalidaController(MyDbContext myDbContext)
        {
            MyDbContext = myDbContext;
        }
        private bool Salida(long id)
        {
            return MyDbContext.salida.Any(a => a.Id == id);
        }
        [HttpGet("Salida")]
        [ProducesResponseType(typeof(List<Salida> ), 200)]
        public async Task<ActionResult<Salida>> getsalidaid(long id)
        {
            var salida = await MyDbContext.salida.FindAsync(id);
            if (salida == null)
            {
                return NotFound();
            }
            return Ok(salida);

        }
            
    }
}
