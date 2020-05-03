using Datos;
using Dominio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Negocios
{
    public class ManejoProducto
    {
        public static void GuardarProducto(Producto producto)
        {

            if ((producto.Id).Equals(0))
            {
                if (!CamposVacios(producto)) //Si no esta vacio, almacenar el producto
                {
                    DatoProducto.GuardarNuevo(producto);
                    MessageBox.Show("El producto: " + producto.Nombre + " ha sido agregado con exito", "Producto Agregado con Exito");
                }
                else
                {
                    MessageBox.Show("Debe completar todos los campos!", "Atención");
                }

            }
            else
            {
                DatoProducto.Modificar(producto);
                MessageBox.Show("El producto ha sido modificado con exito", "Producto Modificado con Exito");
            }
        }

        public static void EliminarProducto(int Id)
        {
            if (Id.Equals(0))
            {
                //No se selecciono ningun producto
                MessageBox.Show("Seleccione un producto", "Atención");
            }
            else
            {
                if (MessageBox.Show("¿Está seguro que desea eliminar el producto?", "Eliminar Producto", MessageBoxButtons.YesNo) == DialogResult.Yes)
                {
                    DatoProducto.Eliminar(Id);
                }
            }
        }

      
        public static List<Producto> ObtenerProducto()
        {
            return DatoProducto.Obtener();
            
        }

        private static bool CamposVacios(Producto producto) //TODO: mejorar metodo
        {
            bool isEmpty = true;

            if (!(string.IsNullOrEmpty(producto.Nombre) && string.IsNullOrEmpty(producto.Descripcion) &&
                string.IsNullOrEmpty(producto.Precio) && string.IsNullOrEmpty(producto.Stock))) //No estan vacios
            {
                isEmpty = false;
                return isEmpty;
            }
            return isEmpty;
        }
    }
}

