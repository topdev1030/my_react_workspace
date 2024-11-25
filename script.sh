if ! yarn build > build_output.log 2>&1; then
        echo "Yarn build failed. Error details:"
        cat build_output.log
        exit 1
      fi
      echo "build run successfully"