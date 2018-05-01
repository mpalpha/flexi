<html lang="en" class="">
<head>
    <meta charset="UTF-8">
    <meta name="robots" content="noindex">
    <link rel="stylesheet prefetch" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
    <link rel="stylesheet prefetch" href="../dist/flexi.min.css">
    <link rel="stylesheet prefetch" href="demo.css">
</head>

<body>
    <div class="page">
        <header class="hero">
            <div class="row center">
                <h1 class="hero-headline">Flexi</h1>
            </div>
            <div class="row center">
                <p class="hero-copy">A grid system based on the
                    <a href="https://caniuse.com/#search=flexbox">
                        <code class="inline-anchor">flex</code>
                    </a> display property.
                </p>
            </div>
            <div class="row center">
                <a class="button invisible visible-md" href="https://github.com/mpalpha/flexi.git">GitHub</a>
            </div>
        </header>
        <div class="wrap container-fluid">
            <a name="responsive"></a>
            <section class="page-section">
                <h2>Responsive</h2>
                <p>Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs,
                    sm, md &amp; lg viewport widths.</p>
                <dl class="margin-bottom-2">
                    <dt>
                        Child columns class examples:</dt>
                    <dd>
                        col-[#]: &nbsp;
                        <small>omit the size namespace for extra small and up*</small>
                    </dd>
                    <dd>
                        col-sm-[#]: &nbsp;
                        <small>append the -sm namespace for small and up*</small>
                    </dd>
                    <dd>
                        col-md-[#]: &nbsp;
                        <small>append the -md namespace for medium and up*</small>
                    </dd>
                    <dd>
                        col-lg-[#]: &nbsp;
                        <small>append the -lg namespace for large and up*</small>
                    </dd>
                </dl>
                <div class="row">
                    <div class="col-12 col-sm-3 col-md-2 col-lg-1">
                        <div class="box-row"></div>
                    </div>
                    <div class="col-6 col-sm-6 col-md-8 col-lg-10">
                        <div class="box-row"></div>
                    </div>
                    <div class="col-6 col-sm-3 col-md-2 col-lg-1">
                        <div class="box-row"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-3 col-md-2 col-lg-1">
                        <div class="box-row"></div>
                    </div>
                    <div class="col-12 col-sm-9 col-md-10 col-lg-11">
                        <div class="box-row"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-10 col-sm-6 col-md-8 col-lg-10">
                        <div class="box-row"></div>
                    </div>
                    <div class="col-2 col-sm-6 col-md-4 col-lg-2">
                        <div class="box-row"></div>
                    </div>
                </div>
                <pre><code>&lt;div class="row"&gt;
    &lt;div class="col-12
                col-sm-8
                col-md-6
                col-lg-4"&gt;
        &lt;div class="box"&gt;Responsive&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </section>
            <a name="fluid"></a>
            <section class="page-section">
                <br>
                <h2>Fluid</h2>
                <p>Percent based widths allow fluid resizing of columns and rows.</p>
                <div class="row">
                    <div class="col-12">
                        <div class="box-row"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-1">
                        <div class="box-row"></div>
                    </div>
                    <div class="col-11">
                        <div class="box-row"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">
                        <div class="box-row"></div>
                    </div>
                    <div class="col-10">
                        <div class="box-row"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <div class="box-row"></div>
                    </div>
                    <div class="col-9">
                        <div class="box-row"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <div class="box-row"></div>
                    </div>
                    <div class="col-8">
                        <div class="box-row"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-5">
                        <div class="box-row"></div>
                    </div>
                    <div class="col-7">
                        <div class="box-row"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="box-row"></div>
                    </div>
                    <div class="col-6">
                        <div class="box-row"></div>
                    </div>
                </div>
                <pre><code>.col-6 {
    flex-basis: 50%;
}</code></pre>
            </section>
            <a name="syntax"></a>
            <section class="page-section">
                <h2>Simple Syntax</h2>
                <p>All you need to remember is row, column, content.</p>
                <pre><code>&lt;div class="row"&gt;
    &lt;div class="col-12"&gt;
        &lt;div class="box"&gt;12&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </section>
            <a name="wrappers"></a>
            <section class="page-section">
                <h2>Wrappers</h2>
                <p>horizontal .row wrapper </p>
                <div class="row">
                    <div class="col-12 col-sm-3 col-md-2 col-lg-1">
                        <div class="box-row"></div>
                    </div>
                    <div class="col-6 col-sm-6 col-md-8 col-lg-10">
                        <div class="box-row"></div>
                    </div>
                    <div class="col-6 col-sm-3 col-md-2 col-lg-1">
                        <div class="box-row"></div>
                    </div>
                </div>
                <pre><code>&lt;div class="row"&gt;
    &lt;div class="col-12
                col-sm-8
                col-md-6
                col-lg-4"&gt;
        &lt;div class="box"&gt;Responsive&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
                <p>vertical .column wrapper (explicit height is required)</p>
                <div class="column" style="height:24rem">
                    <div class="row center">
                        <div class="col">content height</div>
                    </div>
                    <div class="row center grow stretch">
                        <div class="col">
                            <div>grow height</div>
                        </div>
                    </div>
                    <div class="row center">
                        <div class="col">content height</div>
                    </div>
                </div>
                <pre><code>&lt;div class="column" style="height:24rem"&gt;
    &lt;div class="row center"&gt;
        &lt;div class="col"&gt;content height&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="row center grow stretch"&gt;
        &lt;div class="col"&gt;grow height&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="row center"&gt;
        &lt;div class="col"&gt;content height&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </section>
            <a name="offsets"></a>
            <section class="page-section">
                <h2>Offsets</h2>
                <p>Offset a column</p>
                <div class="row">
                    <div class="col-offset-11 col-1">
                        <div class="box-row"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-offset-10 col-2">
                        <div class="box-row"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-offset-9 col-3">
                        <div class="box-row"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-offset-8 col-4">
                        <div class="box-row"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-offset-7 col-5">
                        <div class="box-row"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-offset-6 col-6">
                        <div class="box-row"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-offset-5 col-7">
                        <div class="box-row"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-offset-4 col-8">
                        <div class="box-row"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-offset-3 col-9">
                        <div class="box-row"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-offset-2 col-10">
                        <div class="box-row"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-offset-1 col-11">
                        <div class="box-row"></div>
                    </div>
                </div>
                <pre><code>&lt;div class="row"&gt;
    &lt;div class="col-offset-3 col-9"&gt;
        &lt;div class="box"&gt;offset&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </section>
            <a name="auto"></a>
            <section class="page-section">
                <h2>Auto Width</h2>
                <p>Add any number of auto sizing columns to a row. Let the grid figure it out.</p>
                <div class="row">
                    <div class="col">
                        <div class="box-row"></div>
                    </div>
                    <div class="col">
                        <div class="box-row"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="box-row"></div>
                    </div>
                    <div class="col">
                        <div class="box-row"></div>
                    </div>
                    <div class="col">
                        <div class="box-row"></div>
                    </div>
                </div>
                <pre><code>&lt;div class="row"&gt;
    &lt;div class="col"&gt;
        &lt;div class="box"&gt;auto&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </section>
            <a name="shrink"></a>
            <section class="page-section">
                <h2>Shrink Width</h2>
                <p>Add any number of shrinked sizing columns to a row. Let the grid figure it out.</p>
                <div class="row">
                    <div class="col shrink auto-md">
                        <div class="box-row"></div>
                    </div>
                    <div class="col">
                        <div class="box-row"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="box-row"></div>
                    </div>
                    <div class="col shrink-md auto-lg">
                        <div class="box-row"></div>
                    </div>
                    <div class="col shrink-sm auto-lg">
                        <div class="box-row"></div>
                    </div>
                </div>
                <pre><code>&lt;div class="row"&gt;
    &lt;div class="col shrink auto-md"&gt;
        &lt;div class="box"&gt;shrink&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </section>
            <a name="nested"></a>
            <section class="page-section">
                <h2>Nested Grids</h2>
                <p>Nest grids inside grids inside grids.</p>
                <div class="row collapse">
                    <div class="col-7">
                        <div class="box padding-horizontal-0 box-container">
                            <div class="row collapse">
                                <div class="col-9">
                                    <div class="box-first box-container">
                                        <div class="row">
                                            <div class="col-4">
                                                <div class="box-nested"></div>
                                            </div>
                                            <div class="col-8">
                                                <div class="box-nested"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="box-first box-container">
                                        <div class="row">
                                            <div class="col">
                                                <div class="box-nested"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-5">
                        <div class="box padding-horizontal-0 box-container">
                            <div class="row collapse">
                                <div class="col-12">
                                    <div class="box-first box-container">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="box-nested"></div>
                                            </div>
                                            <div class="col-6">
                                                <div class="box-nested"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <pre><code>&lt;div class="row collapse"&gt;
    &lt;div class="col"&gt;
        &lt;div class="box"&gt;
            &lt;div class="row"&gt;
                &lt;div class="col"&gt;
                    &lt;div class="box"&gt;auto&lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </section>
            <a name="alignment"></a>
            <section class="page-section">
                <h2>Alignment</h2>
                <p>Add classes to align elements to the start or end of a row as well as the top, bottom, or center of a column</p>
                <h3>
                    <code>.start or .start-[sm|md|lg]</code>
                </h3>
                <div class="row">
                    <div class="col-12">
                        <div class="box box-container">
                            <div class="row start">
                                <div class="col-6">
                                    <div class="box-nested"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <pre><code>&lt;div class="row start"&gt;
    &lt;div class="col-6"&gt;
        &lt;div class="box"&gt;
            start
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
                <h3>
                    <code>.center or .center-[sm|md|lg]</code>
                </h3>
                <div class="row">
                    <div class="col-12">
                        <div class="box box-container">
                            <div class="row center">
                                <div class="col-6">
                                    <div class="box-nested"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <pre><code>&lt;div class="row center"&gt;
    &lt;div class="col-6"&gt;
        &lt;div class="box"&gt;
            start
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
                <h3>
                    <code>.end or .end-[sm|md|lg]</code>
                </h3>
                <div class="row">
                    <div class="col-12">
                        <div class="box box-container">
                            <div class="row end">
                                <div class="col-6">
                                    <div class="box-nested"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <pre><code>&lt;div class="row end"&gt;
    &lt;div class="col-6"&gt;
        &lt;div class="box"&gt;
            end
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
                <p>Here is an example of using the modifiers in conjunction to acheive different alignment at different viewport
                    sizes. </p>
                <div class="row">
                    <div class="col-12">
                        <div class="box box-container">
                            <div class="row center end-sm start-lg">
                                <div class="col-6">
                                    <div class="box-nested"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>Example
                <pre><code>&lt;div class="row center end-sm start-lg"&gt;
    &lt;div class="col-6"&gt;
        &lt;div class="box"&gt;
            All together now
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
                <h3>
                    <code>.top or .top-[sm|md|lg]</code>
                </h3>
                <div class="row top">
                    <div class="col-6">
                        <div class="box-large"></div>
                    </div>
                    <div class="col-6">
                        <div class="box"></div>
                    </div>
                </div>
                <pre><code>&lt;div class="row top"&gt;
    &lt;div class="col-6"&gt;
        &lt;div class="box"&gt;
            top
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
                <h3>
                    <code>.middle or .middle-[sm|md|lg]</code>
                </h3>
                <div class="row middle">
                    <div class="col-6">
                        <div class="box-large"></div>
                    </div>
                    <div class="col-6">
                        <div class="box"></div>
                    </div>
                </div>
                <pre><code>&lt;div class="row middle"&gt;
    &lt;div class="col-6"&gt;
        &lt;div class="box"&gt;
            center
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
                <h3>
                    <code>.bottom or .bottom-[sm|md|lg]</code>
                </h3>
                <div class="row bottom">
                    <div class="col-6">
                        <div class="box-large"></div>
                    </div>
                    <div class="col-6">
                        <div class="box"></div>
                    </div>
                </div>
                <pre><code>&lt;div class="row bottom"&gt;
    &lt;div class="col-6"&gt;
        &lt;div class="box"&gt;
            bottom
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
                <h3>
                    <code>.col* or .stretch-[sm|md|lg] (default - align-items: stretch)</code>
                </h3>
                <div class="row bottom stretch-md">
                    <div class="col-6">
                        <div class="box-large"></div>
                    </div>
                    <div class="col-6 stretch-md">
                        <div class="box"></div>
                    </div>
                </div>
                <pre><code>&lt;div class="row bottom stretch-md"&gt;
    &lt;div class="col-6"&gt;
        &lt;div class="box"&gt;
            xs bottom md stretch
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
            </section>
            <a name="distribution"></a>
            <section class="page-section">
                <h2>Distribution</h2>
                <p>Add classes to distribute the contents of a row or column.</p>
                <h3>
                    <code>.around or .around-[sm|md|lg]</code>
                </h3>
                <div class="row">
                    <div class="col-12">
                        <div class="box box-container">
                            <div class="row around">
                                <div class="col-2">
                                    <div class="box-nested"></div>
                                </div>
                                <div class="col-2">
                                    <div class="box-nested"></div>
                                </div>
                                <div class="col-2">
                                    <div class="box-nested"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <pre><code>&lt;div class="row around"&gt;
    &lt;div class="col-2"&gt;
        &lt;div class="box"&gt;
            around
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-2"&gt;
        &lt;div class="box"&gt;
            around
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-2"&gt;
        &lt;div class="box"&gt;
            around
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
                <h3>
                    <code>.between or .between-[sm|md|lg]</code>
                </h3>
                <div class="row">
                    <div class="col-12">
                        <div class="box box-container">
                            <div class="row between">
                                <div class="col-2">
                                    <div class="box-nested"></div>
                                </div>
                                <div class="col-2">
                                    <div class="box-nested"></div>
                                </div>
                                <div class="col-2">
                                    <div class="box-nested"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <pre><code>&lt;div class="row between"&gt;
    &lt;div class="col-2"&gt;
        &lt;div class="box"&gt;
            between
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-2"&gt;
        &lt;div class="box"&gt;
            between
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-2"&gt;
        &lt;div class="box"&gt;
            between
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
            </section>
            <a name="reordering"></a>
            <section class="page-section">
                <h2>Reordering</h2>
                <p>Add classes to reorder columns.</p>
                <h3>
                    <code>.first or .first-[sm|md|lg]</code>
                </h3>
                <div class="row">
                    <div class="col-12">
                        <div class="box box-container">
                            <div class="row">
                                <div class="col-2">
                                    <div class="box-first">1</div>
                                </div>
                                <div class="col-2">
                                    <div class="box-first">2</div>
                                </div>
                                <div class="col-2">
                                    <div class="box-first">3</div>
                                </div>
                                <div class="col-2">
                                    <div class="box-first">4</div>
                                </div>
                                <div class="col-2">
                                    <div class="box-first">5</div>
                                </div>
                                <div class="col-2 first">
                                    <div class="box-nested">6</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <pre><code>&lt;div class="row"&gt;
    &lt;div class="col-2"&gt;
        &lt;div class="box"&gt;
            1
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-2"&gt;
        &lt;div class="box"&gt;
            2
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-2 first"&gt;
        &lt;div class="box"&gt;
            3
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
                <h3>
                    <code>.last or .last-[sm|md|lg]</code>
                </h3>
                <div class="row">
                    <div class="col-12">
                        <div class="box box-container">
                            <div class="row">
                                <div class="col-2 last">
                                    <div class="box-nested">1</div>
                                </div>
                                <div class="col-2">
                                    <div class="box-first">2</div>
                                </div>
                                <div class="col-2">
                                    <div class="box-first">3</div>
                                </div>
                                <div class="col-2">
                                    <div class="box-first">4</div>
                                </div>
                                <div class="col-2">
                                    <div class="box-first">5</div>
                                </div>
                                <div class="col-2">
                                    <div class="box-first">6</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <pre><code>&lt;div class="row"&gt;
    &lt;div class="col-2 last"&gt;
        &lt;div class="box"&gt;
            1
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-2"&gt;
        &lt;div class="box"&gt;
            2
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-2"&gt;
        &lt;div class="box"&gt;
            3
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
                <h3>
                    <code>.reset or .reset-[sm|md|lg]</code>
                </h3>
                <div class="row">
                    <div class="col-12">
                        <div class="box box-container">
                            <div class="row">
                                <div class="col-2">
                                    <div class="box-first">1</div>
                                </div>
                                <div class="col-2">
                                    <div class="box-first">2</div>
                                </div>
                                <div class="col-2">
                                    <div class="box-first">3</div>
                                </div>
                                <div class="col-2">
                                    <div class="box-first">4</div>
                                </div>
                                <div class="col-2">
                                    <div class="box-first">5</div>
                                </div>
                                <div class="col-2 first reset-lg">
                                    <div class="box-nested">6</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <pre><code>&lt;div class="row"&gt;
    &lt;div class="col-2"&gt;
        &lt;div class="box"&gt;
            1
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-2"&gt;
        &lt;div class="box"&gt;
            2
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-2 first reset-lg"&gt;
        &lt;div class="box"&gt;
            3
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
                <h3>
                    <code>.order-[#] or .order-[#]-[sm|md|lg]</code>
                </h3>
                <div class="row">
                    <div class="col-12">
                        <div class="box box-container">
                            <div class="row">
                                <div class="col-2">
                                    <div class="box-first">1</div>
                                </div>
                                <div class="col-2">
                                    <div class="box-first">2</div>
                                </div>
                                <div class="col-2">
                                    <div class="box-first">3</div>
                                </div>
                                <div class="col-2">
                                    <div class="box-first">4</div>
                                </div>
                                <div class="col-2">
                                    <div class="box-first">5</div>
                                </div>
                                <div class="col-2 first order-6-lg">
                                    <div class="box-nested">6</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <pre><code>&lt;div class="row"&gt;
    &lt;div class="col-2"&gt;
        &lt;div class="box"&gt;
            1
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-2"&gt;
        &lt;div class="box"&gt;
            2
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-2 first order-3-lg"&gt;
        &lt;div class="box"&gt;
            3
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
            </section>
            <a name="reversing"></a>
            <section class="page-section">
                <h2>Reversing</h2>
                <h3>
                    <code>.reverse</code>
                </h3>
                <div class="row">
                    <div class="col-12">
                        <div class="box box-container">
                            <div class="row reverse">
                                <div class="col-2">
                                    <div class="box-nested">1</div>
                                </div>
                                <div class="col-2">
                                    <div class="box-nested">2</div>
                                </div>
                                <div class="col-2">
                                    <div class="box-nested">3</div>
                                </div>
                                <div class="col-2">
                                    <div class="box-nested">4</div>
                                </div>
                                <div class="col-2">
                                    <div class="box-nested">5</div>
                                </div>
                                <div class="col-2">
                                    <div class="box-nested">6</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <pre><code>&lt;div class="row reverse"&gt;
    &lt;div class="col-2"&gt;
        &lt;div class="box"&gt;
            1
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-2"&gt;
        &lt;div class="box"&gt;
            2
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-2"&gt;
        &lt;div class="box"&gt;
            3
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
            </section>
            <footer class="page-footer">
                <div class="row">
                    <div class="col start">
                        <a class="tag" href="https://github.com/mpalpha">
                            follow me on github
                        </a>
                    </div>
                    <div class="col end">
                        <a class="link-top" href="#top">⇪ back to top</a>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</body>
</html>

