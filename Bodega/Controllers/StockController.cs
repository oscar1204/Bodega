using Bodega.DbContex;
using Bodega.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bodega.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StockController : ControllerBase
    {
        private MyDbContext MyDbContext;
        public StockController(MyDbContext myDbContext)
        {
            MyDbContext = myDbContext;
        }
        private bool Stock(long id)
        {
            return MyDbContext.products.Any(a => a.Id == id);
        }
        [HttpGet("Stock")]
        [ProducesResponseType(typeof(List<Stock>), 200)]
        public async Task<ActionResult<Stock>> getproductid(long id)
        {
            var stock = await MyDbContext.products.FindAsync(id);
            if (stock == null)
            {
                return NotFound();
            }
            return Ok(stock);
        }
    }
}

