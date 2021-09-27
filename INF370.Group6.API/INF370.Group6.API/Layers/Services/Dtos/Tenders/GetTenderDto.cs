﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace INF370.Group6.API.Layers.Services.Dtos.Tenders
{
    public class GetTenderDto
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(500)]
        public string Name { get; set; }
        [Required]
        [MaxLength(500)]
        public string Description { get; set; }

        public DateTime RawDateSubmitted { get; set; }
        public string DateSubmitted { get; set; }

        public string TenderSource { get; set; }

        public int TenderStatusId { get; set; }

        public string TenderStatusName { get; set; }
    }
}
