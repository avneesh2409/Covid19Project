using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using MySecondWebApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MySecondWebApplication.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public DbSet<AccountModel> accounts { get; set; }
        public DbSet<RoleModel> roles { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Seed();
        }
    }
}
public static class ModelBuilderExtensions
{
    public static void Seed(this ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<RoleModel>()
            .HasData(
            new RoleModel
            {
                Id=1,
                Role="Admin" 
            },
            new RoleModel
            {
                Id = 2,
                Role = "Doctor"
            },
            new RoleModel
            {
                Id = 3,
                Role = "Patient"
            },
            new RoleModel
            {
                Id = 4,
                Role = "Phlebotomist"
            },
            new RoleModel
            {
                Id = 5,
                Role = "LabTechnician"
            });
        modelBuilder.Entity<AccountModel>()
       .HasIndex(u => u.Email)
       .IsUnique();
        modelBuilder.Entity<AccountModel>().HasData(
            new AccountModel
            {
                Id = 1,
                Email = "admin@gmail.com",
                Name = "Admin",
                Password = "12345",
                CreatedBy = "Admin",
                CreatedOn = new DateTime().ToString(),
                ModifiedBy = "Admin",
                ModifiedOn = new DateTime().ToString(),
                isActive = false,
                RoleId = 1
            });
    }
}