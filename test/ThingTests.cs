using Source;
using Xunit;

namespace Test;

public class ThingTests
{
    [Fact]
    public void Add_Success()
    {
        var value = Thing.Add(2, 3);

        Assert.Equal(5, value);
    }
}
