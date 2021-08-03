using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication1.Models;

namespace WebApplication1.Repository
{
	public class CervejaRepository
	{
		private static List<Cerveja> listaCerveja = new List<Cerveja>();

		public void Create(Cerveja model)
		{
			listaCerveja.Add(model);
		}
		public List<Cerveja> Read()
		{
			return listaCerveja;
		}
		public void Update(Cerveja model)
		{
			Cerveja cervejaAnterior = listaCerveja.Find(c => c.Marca == model.Marca);
			if (cervejaAnterior != null)
			{
				cervejaAnterior = model;
			}
		}
		public void Delete(string Marca)
		{
			Cerveja cerveja = listaCerveja.Find(c => c.Marca == Marca);
			if (cerveja != null)
			{
				listaCerveja.Remove(cerveja);
			}
		}
	}
}