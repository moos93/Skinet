using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Specifications;

public class BrandListSpec :BaseSpecification<Product , string>
{
    public BrandListSpec()
    {
        AddSelect(x => x.Brand);
        ApplyDistinct();
    }
}
