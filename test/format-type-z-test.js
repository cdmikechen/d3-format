var tape = require("tape"),
    format = require("../");

tape("format(\"z\") outputs SI-prefix notation with default precision 6", function(test) {
    var f = format.format("z");
    test.equal(f(0), "0.00000");
    test.equal(f(1), "1.00000");
    test.equal(f(10), "10.0000");
    test.equal(f(100), "100.000");
    test.equal(f(999.5), "999.500");
    test.equal(f(999500), "99.9500万");
    test.end();
});

tape("format(\"[.precision]z\") outputs SI-prefix notation with precision significant digits", function(test) {
    var f1 = format.format(".3z");
    test.equal(f1(0), "0.00");
    test.equal(f1(1), "1.00");
    test.equal(f1(10), "10.0");
    test.equal(f1(100), "100");
    test.equal(f1(999.5), "1000");
    test.equal(f1(999500), "100万");
    test.equal(f1(1000), "1000");
    test.equal(f1(1500.5), "1500");
    test.equal(f1(145500000), "1.46亿");
    test.equal(f1(145999999.999999347), "1.46亿");
    test.equal(f1(1e26), "100秭");
    test.equal(f1(.000001), "1.00µ");
    test.equal(f1(.009995), "10.0m");
    var f2 = format.format(".4z");
    test.equal(f2(999.5), "999.5");
    test.equal(f2(999500), "99.95万");
    test.equal(f2(.009995), "9.995m");
    test.end();
});