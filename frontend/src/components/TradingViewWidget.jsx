import React, { useEffect, useRef } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "width": "100%",
          "height": "610",
          "symbol": "BINANCE:BTCUSDT",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "container_id": "tradingview-widget-container"
        }`;

      const widgetContainer = document.createElement('div');
      widgetContainer.id = 'tradingview-widget-container';

      container.current.appendChild(widgetContainer);
      container.current.appendChild(script);

      return () => {
        // Clean up the script and widget container when the component unmounts
        if (container.current) {
            while (container.current.firstChild) {
                container.current.removeChild(container.current.firstChild);
            }
        }
      };
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "610px", width: "100%" }}>
    </div>
  );
}

export default React.memo(TradingViewWidget);
