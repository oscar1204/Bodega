using Bodega.DbContex;
using Bodega.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bodega.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductoController : ControllerBase
    {
        private MyDbContext MyDbContext;
        public ProductoController(MyDbContext myDbContext)
        {
            MyDbContext = myDbContext;
        }
        private bool Producto(long id)
        {
            return MyDbContext.products.Any(a => a.Id == id);
        }
        [HttpGet("Producto")]
        [ProducesResponseType(typeof(List<Producto>), 200)]
        public async Task<ActionResult<Producto>> getproductid(long id)
        {
            var producto = await MyDbContext.products.FindAsync(id);
            if (producto == null)
            {
                return NotFound();
            }
            return Ok(producto);
        }
    }
}