using Bodega.Models;
using Microsoft.EntityFrameworkCore;

namespace Bodega.DbContex
{
    public class MyDbContext : DbContext
    {
        public DbSet<Enrada> enradas { get; set; }
        public DbSet<Salida> salida { get; set; }
        public DbSet<Estado> estado { get; set; }
        public DbSet<Stock> stocks { get; set; }
        public DbSet<Producto> products { get; set; }
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        { 
        }
       
        
    }
}
