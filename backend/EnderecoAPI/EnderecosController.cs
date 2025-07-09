using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

[ApiController]
[Route("api/enderecos")]
public class EnderecosController : ControllerBase
{
    private readonly HttpClient _http;

    public EnderecosController(IHttpClientFactory httpClientFactory)
    {
        _http = httpClientFactory.CreateClient();
    }

    [HttpGet("cep/{cep}")]
    public async Task<IActionResult> BuscarPorCep(string cep)
    {
        var url = $"https://viacep.com.br/ws/{cep}/json/";
        var response = await _http.GetStringAsync(url);
        var dados = JsonSerializer.Deserialize<object>(response);
        return Ok(dados);
    }

    [HttpGet("{estado}/{cidade}/{logradouro}")]
    public async Task<IActionResult> BuscarPorEndereco(string estado, string cidade, string logradouro)
    {
        var url = $"https://viacep.com.br/ws/{estado}/{cidade}/{logradouro}/json/";
        var response = await _http.GetStringAsync(url);
        var dados = JsonSerializer.Deserialize<object>(response);

        if (dados is JsonElement elem && elem.ValueKind == JsonValueKind.Array && elem.GetArrayLength() == 0)
        {
            return NotFound("Erro ao buscar o endereço. Verifique os dados informados.");
        }

        return Ok(dados);

    }
}

